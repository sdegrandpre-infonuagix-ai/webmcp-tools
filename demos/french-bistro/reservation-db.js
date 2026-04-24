/**
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

const DB_NAME = 'lePetitBistroDB';
const DB_VERSION = 1;
const STORE = 'reservations';

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => resolve(req.result);
    req.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const os = db.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true });
        os.createIndex('createdAt', 'createdAt', { unique: false });
      }
    };
  });
}

/**
 * @param {object} record — fields: name, phone, date, time, guests, guestsLabel, seating, seatingLabel, requests
 * @returns {Promise<number>} new row id
 */
export async function addReservation(record) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    const payload = { ...record, createdAt: Date.now() };
    const req = tx.objectStore(STORE).add(payload);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/** @returns {Promise<Array<{ id: number } & Record<string, unknown>>>} */
export async function getAllReservations() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => {
      const rows = req.result;
      rows.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
      resolve(rows);
    };
    req.onerror = () => reject(req.error);
  });
}

/** @param {number} id */
export async function deleteReservation(id) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    const req = tx.objectStore(STORE).delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}
