/**
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { addReservation, deleteReservation, getAllReservations } from './reservation-db.js';

const form = document.getElementById('reservationForm');
const dialog = document.getElementById('bookingDialog');
const closeBtn = document.getElementById('closeDialogBtn');
const modalDetails = document.getElementById('modalDetails');
const params = new URLSearchParams(window.location.search);
const isCrossDocument = params.has("crossdocument");
const toolAutoSubmit = params.has("toolautosubmit");

if (isCrossDocument) {
  form.setAttribute("action", "./result.html");
}

if (toolAutoSubmit) {
  form.setAttribute("toolautosubmit", "true");
}

// Remove form attributes to test WebMCP audit failures
if (params.has('notoolname')) {
  form.removeAttribute('toolname');
}
if (params.has('notooldescription')) {
  form.removeAttribute('tooldescription');
}
if (params.has('nolabelfor')) {
  document.querySelectorAll('label[for]').forEach((element) => {
    element.removeAttribute('for');
  });
}
if (params.has('notoolparamdescription')) {
  document.querySelectorAll('[toolparamdescription]').forEach((element) => {
    element.removeAttribute('toolparamdescription');
  });
}
if (params.has('norequiredname')) {
  document.querySelectorAll('[name][required]').forEach((element) => {
    element.removeAttribute('name');
  });
}

let formValidationErrors = []; // Array to collect validation error messages to send back to the Agent.

/** HTML date value (YYYY-MM-DD) as a local calendar Date (avoids UTC parse shift). */
function parseISODateAsLocal(ymd) {
  if (!ymd || !/^\d{4}-\d{2}-\d{2}$/.test(ymd)) return null;
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** Today's calendar date in local timezone as YYYY-MM-DD for <input type="date" min>. */
function localTodayISODate() {
  const n = new Date();
  const mo = String(n.getMonth() + 1).padStart(2, '0');
  const da = String(n.getDate()).padStart(2, '0');
  return `${n.getFullYear()}-${mo}-${da}`;
}

const dateInput = document.getElementById('date');
dateInput.setAttribute('min', localTodayISODate());

function collectReservationRecord() {
  return {
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    guests: document.getElementById('guests').value,
    guestsLabel: document.querySelector('#guests option:checked').textContent,
    seating: document.getElementById('seating').value,
    seatingLabel: document.querySelector('#seating option:checked').textContent,
    requests: document.getElementById('requests').value.trim(),
  };
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  validateForm();

  if (formValidationErrors.length) {
    if (e.agentInvoked) {
      e.respondWith(formValidationErrors);
    }
    return;
  }

  try {
    await addReservation(collectReservationRecord());
  } catch (err) {
    console.error('IndexedDB save failed', err);
  }

  if (isCrossDocument) {
    const qs = new URLSearchParams(new FormData(form)).toString();
    window.location.assign(`./result.html?${qs}`);
    return;
  }

  showModal();

  if (e.agentInvoked) {
    e.respondWith(modalDetails.textContent);
  }
});

function showModal() {
  const name = document.getElementById('name').value;
  const time = document.getElementById('time').value;
  const guests = document.querySelector('#guests option:checked').textContent;
  const seating = document.querySelector('#seating option:checked').textContent;

  const dateObj = parseISODateAsLocal(document.getElementById('date').value);
  const dateStr = dateObj
    ? dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    : '';

  modalDetails.innerHTML = `Hello <strong>${name}</strong>,<br> We look forward to welcoming you on:<br><br> <strong>${dateStr}</strong> at <strong>${time}</strong><br> Party of <strong>${guests}</strong> &bull; ${seating}`;
  dialog.showModal();
}

closeBtn.addEventListener('click', () => {
  dialog.close();
  form.reset();
  resetValidationUI();
});

dialog.addEventListener('click', (e) => {
  const rect = dialog.getBoundingClientRect();
  if (
    e.clientY < rect.top ||
    e.clientY > rect.bottom ||
    e.clientX < rect.left ||
    e.clientX > rect.right
  ) {
    dialog.close();
    form.reset();
    resetValidationUI();
  }
});

function resetValidationUI() {
  document.querySelectorAll('.invalid').forEach((el) => el.classList.remove('invalid'));
  document.querySelectorAll('.error-msg').forEach((el) => (el.style.display = 'none'));
}

function validateForm() {
  formValidationErrors = [];

  // Helper: Toggle error styles and collect messages
  function validateField(input, condition) {
    const errorSpan = input.parentElement.querySelector('.error-msg');
    const errorText = errorSpan ? errorSpan.innerText : 'Unknown error';

    if (!condition) {
      input.classList.add('invalid');
      if (errorSpan) errorSpan.style.display = 'block';

      formValidationErrors.push({
        field: input.name,
        value: input.value,
        message: errorText,
      });
    } else {
      input.classList.remove('invalid');
      if (errorSpan) errorSpan.style.display = 'none';
    }
  }

  const nameInput = document.getElementById('name');
  validateField(nameInput, nameInput.value.trim().length >= 2);

  const phoneInput = document.getElementById('phone');
  const digitsOnly = phoneInput.value.replace(/\D/g, '');
  validateField(phoneInput, digitsOnly.length >= 10);

  const inputDate = parseISODateAsLocal(dateInput.value);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  validateField(
    dateInput,
    dateInput.value !== '' && inputDate !== null && inputDate >= currentDate
  );

  const timeInput = document.getElementById('time');
  validateField(timeInput, timeInput.value !== '');

  const guestsInput = document.getElementById('guests');
  validateField(guestsInput, guestsInput.selectedIndex !== -1);

  const seatingInput = document.getElementById('seating');
  validateField(seatingInput, seatingInput.selectedIndex !== -1);
}

window.addEventListener('toolactivated', ({ toolName }) => {
  if (toolName !== 'book_table_le_petit_bistro') return;
  validateForm();
});

const reservationsDialog = document.getElementById('reservationsDialog');
const reservationsList = document.getElementById('reservationsList');
const openReservationsBtn = document.getElementById('openReservationsBtn');
const closeReservationsBtn = document.getElementById('closeReservationsBtn');

function formatReservationDate(isoDate) {
  if (!isoDate) return '';
  const dateObj = parseISODateAsLocal(isoDate);
  if (!dateObj) return String(isoDate);
  return dateObj.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

async function renderReservationsList() {
  let rows;
  try {
    rows = await getAllReservations();
  } catch (err) {
    console.error('IndexedDB read failed', err);
    reservationsList.innerHTML =
      '<p class="reservations-empty">Could not read saved reservations.</p>';
    return;
  }

  if (!rows.length) {
    reservationsList.innerHTML =
      '<p class="reservations-empty">No reservations yet. Submit the form to save one here.</p>';
    return;
  }

  reservationsList.innerHTML = rows
    .map(
      (row) => `
    <article class="reservation-card" data-id="${row.id}">
      <div class="reservation-card-body">
        <strong>${escapeHtml(row.name)}</strong>
        <span class="reservation-meta">${escapeHtml(formatReservationDate(row.date))} · ${escapeHtml(row.time)}</span>
        <span class="reservation-meta">${escapeHtml(row.guestsLabel)} · ${escapeHtml(row.seatingLabel)}</span>
        ${row.requests ? `<span class="reservation-note">${escapeHtml(row.requests)}</span>` : ''}
      </div>
      <button type="button" class="delete-reservation-btn" data-id="${row.id}" aria-label="Delete reservation">×</button>
    </article>`
    )
    .join('');

  reservationsList.querySelectorAll('.delete-reservation-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = Number(btn.getAttribute('data-id'));
      try {
        await deleteReservation(id);
      } catch (err) {
        console.error('IndexedDB delete failed', err);
      }
      await renderReservationsList();
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text == null ? '' : String(text);
  return div.innerHTML;
}

openReservationsBtn.addEventListener('click', async () => {
  await renderReservationsList();
  reservationsDialog.showModal();
});

closeReservationsBtn.addEventListener('click', () => {
  reservationsDialog.close();
});

reservationsDialog.addEventListener('click', (e) => {
  const rect = reservationsDialog.getBoundingClientRect();
  if (
    e.clientY < rect.top ||
    e.clientY > rect.bottom ||
    e.clientX < rect.left ||
    e.clientX > rect.right
  ) {
    reservationsDialog.close();
  }
});
