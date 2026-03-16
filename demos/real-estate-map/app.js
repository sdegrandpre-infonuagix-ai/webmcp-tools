const mockProperties = [
    {
        id: 1,
        title: "Magnifique Appartement Haussmannien",
        price: 1550000,
        type: "Apartment",
        area: 120,
        rooms: 4,
        bedrooms: 3,
        energyClass: "D",
        features: ["Balcony", "Elevator"],
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
        address: "75008 Paris, France",
        lat: 48.8727,
        lng: 2.3126,
        description: "Superb Haussmannian apartment near Champs-Élysées with original moldings, Point de Hongrie parquet floors, and marble fireplaces.",
        link: "#"
    },
    {
        id: 2,
        title: "Charming Le Marais Studio",
        price: 380000,
        type: "Studio",
        area: 28,
        rooms: 1,
        bedrooms: 0,
        energyClass: "E",
        features: [],
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
        address: "75003 Paris, France",
        lat: 48.8598,
        lng: 2.3614,
        description: "Perfect pied-à-terre in the heart of Le Marais. Exposed beams and modern renovations make this a cozy gem.",
        link: "#"
    },
    {
        id: 3,
        title: "Modern Duplex near Canal Saint-Martin",
        price: 1100000,
        type: "Apartment",
        area: 95,
        rooms: 4,
        bedrooms: 2,
        energyClass: "B",
        features: ["Terrace", "Elevator", "Parking"],
        image: "https://images.unsplash.com/photo-1502672260266-1c1529801574?auto=format&fit=crop&q=80&w=800",
        address: "75010 Paris, France",
        lat: 48.8738,
        lng: 2.3650,
        description: "Contemporary duplex with a large sunny terrace overlooking the canal. Includes secure underground parking.",
        link: "#"
    },
    {
        id: 4,
        title: "Rare Townhouse in Montmartre",
        price: 2400000,
        type: "House",
        area: 180,
        rooms: 6,
        bedrooms: 4,
        energyClass: "C",
        features: ["Terrace", "Balcony"],
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
        address: "75018 Paris, France",
        lat: 48.8872,
        lng: 2.3386,
        description: "Exceptional private house tucked away in Montmartre with a private garden, terrace, and stunning city views.",
        link: "#"
    },
    {
        id: 5,
        title: "Elegant Family Apartment Passy",
        price: 1850000,
        type: "Apartment",
        area: 145,
        rooms: 5,
        bedrooms: 3,
        energyClass: "C",
        features: ["Elevator", "Parking"],
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
        address: "75016 Paris, France",
        lat: 48.8580,
        lng: 2.2818,
        description: "Spacious and bright family apartment in the prestigious 16th arrondissement. Secure building with concierge.",
        link: "#"
    },
    {
        id: 6,
        title: "Cozy Studio near Sorbonne",
        price: 410000,
        type: "Studio",
        area: 32,
        rooms: 1,
        bedrooms: 0,
        energyClass: "F",
        features: ["Elevator"],
        image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=800",
        address: "75005 Paris, France",
        lat: 48.8483,
        lng: 2.3435,
        description: "Student-friendly studio in the Latin Quarter. Very close to universities and public transit.",
        link: "#"
    },
    {
        id: 7,
        title: "Penthouse with Eiffel Tower View",
        price: 3200000,
        type: "Apartment",
        area: 210,
        rooms: 6,
        bedrooms: 4,
        energyClass: "B",
        features: ["Terrace", "Balcony", "Elevator", "Parking"],
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
        address: "75007 Paris, France",
        lat: 48.8581,
        lng: 2.3015,
        description: "Breathtaking penthouse apartment offering a wrap-around terrace and unobstructed views of the Eiffel Tower.",
        link: "#"
    },
    {
        id: 8,
        title: "Renovated Loft in Belleville",
        price: 850000,
        type: "Apartment",
        area: 88,
        rooms: 3,
        bedrooms: 2,
        energyClass: "C",
        features: ["Parking"],
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800",
        address: "75020 Paris, France",
        lat: 48.8719,
        lng: 2.3871,
        description: "Industrial style loft in a former workshop. Very bright with a large skylight and open-plan kitchen.",
        link: "#"
    },
    {
        id: 9,
        title: "Quiet House in La Butte aux Cailles",
        price: 1350000,
        type: "House",
        area: 110,
        rooms: 4,
        bedrooms: 3,
        energyClass: "D",
        features: ["Terrace"],
        image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=800",
        address: "75013 Paris, France",
        lat: 48.8278,
        lng: 2.3508,
        description: "Extremely rare village-style house in Paris. Quiet cobblestone street layout with a private sunny courtyard.",
        link: "#"
    },
    {
        id: 10,
        title: "Luxury Apartment Ile Saint-Louis",
        price: 2800000,
        type: "Apartment",
        area: 135,
        rooms: 5,
        bedrooms: 2,
        energyClass: "D",
        features: ["Balcony", "Elevator"],
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800",
        address: "75004 Paris, France",
        lat: 48.8521,
        lng: 2.3563,
        description: "Historic apartment on the exclusive Ile Saint-Louis holding spectacular views over the Seine.",
        link: "#"
    },
    {
        id: 11,
        title: "Bright Studio near Bastille",
        price: 320000,
        type: "Studio",
        area: 24,
        rooms: 1,
        bedrooms: 0,
        energyClass: "G",
        features: [],
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
        address: "75011 Paris, France",
        lat: 48.8533,
        lng: 2.3693,
        description: "Top floor studio apartment, requires some energy class updating but offers great potential and brightness.",
        link: "#"
    },
    {
        id: 12,
        title: "New Build Apartment Batignolles",
        price: 980000,
        type: "Apartment",
        area: 75,
        rooms: 3,
        bedrooms: 2,
        energyClass: "A",
        features: ["Balcony", "Elevator", "Parking"],
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
        address: "75017 Paris, France",
        lat: 48.8835,
        lng: 2.3168,
        description: "Eco-friendly modern apartment in the new eco-district. Highly energy efficient with a long balcony.",
        link: "#"
    },
    {
        id: 13,
        title: "Art Deco Apartment Vaugirard",
        price: 745000,
        type: "Apartment",
        area: 68,
        rooms: 3,
        bedrooms: 2,
        energyClass: "E",
        features: ["Elevator"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
        address: "75015 Paris, France",
        lat: 48.8415,
        lng: 2.3005,
        description: "Charming 1930s apartment with beautiful bow windows and original character in a quiet residential area.",
        link: "#"
    },
    {
        id: 14,
        title: "Architect House Montparnasse",
        price: 1950000,
        type: "House",
        area: 165,
        rooms: 6,
        bedrooms: 4,
        energyClass: "C",
        features: ["Terrace", "Parking"],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        address: "75014 Paris, France",
        lat: 48.8351,
        lng: 2.3268,
        description: "Unique contemporary house hidden behind a courtyard. Features a glass roof living area and interior patio.",
        link: "#"
    },
    {
        id: 15,
        title: "Classic Apartment Saint-Germain",
        price: 2150000,
        type: "Apartment",
        area: 110,
        rooms: 4,
        bedrooms: 2,
        energyClass: "D",
        features: ["Elevator"],
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
        address: "75006 Paris, France",
        lat: 48.8530,
        lng: 2.3325,
        description: "Quintessential Parisian elegance in Saint-Germain-des-Prés. High ceilings, long balcony, and prestegious address.",
        link: "#"
    },
    {
        id: 16,
        title: "Large Family Home in Auteuil",
        price: 3500000,
        type: "House",
        area: 250,
        rooms: 8,
        bedrooms: 5,
        energyClass: "C",
        features: ["Terrace", "Balcony", "Parking"],
        image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=800",
        address: "75016 Paris, France",
        lat: 48.8465,
        lng: 2.2625,
        description: "A gorgeous family home in the exclusive Auteuil neighborhood featuring a private driveway, garden, and large terrace.",
        link: "#"
    },
    {
        id: 17,
        title: "Modern Studio near La Villette",
        price: 295000,
        type: "Studio",
        area: 22,
        rooms: 1,
        bedrooms: 0,
        energyClass: "D",
        features: ["Elevator"],
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
        address: "75019 Paris, France",
        lat: 48.8921,
        lng: 2.3850,
        description: "Excellent investment property near the beautiful Parc de la Villette. Recently renovated and highly optimized space.",
        link: "#"
    },
    {
        id: 18,
        title: "Artist Apartment in Pigalle",
        price: 680000,
        type: "Apartment",
        area: 60,
        rooms: 2,
        bedrooms: 1,
        energyClass: "E",
        features: ["Balcony"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        address: "75009 Paris, France",
        lat: 48.8821,
        lng: 2.3364,
        description: "Bohemian chic apartment located in lively South Pigalle. Featues high ceilings and a sunny wrought-iron balcony.",
        link: "#"
    },
    {
        id: 19,
        title: "Luxurious Hotel Particulier",
        price: 5200000,
        type: "House",
        area: 400,
        rooms: 10,
        bedrooms: 6,
        energyClass: "B",
        features: ["Terrace", "Elevator", "Parking"],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        address: "75008 Paris, France",
        lat: 48.8742,
        lng: 2.3087,
        description: "An incredibly rare Hôtel Particulier off the Champs-Élysées. Completely restored with a private internal elevator and secure parking.",
        link: "#"
    },
    {
        id: 20,
        title: "Cozy Flat in Saint-Ambroise",
        price: 510000,
        type: "Apartment",
        area: 45,
        rooms: 2,
        bedrooms: 1,
        energyClass: "C",
        features: [],
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800",
        address: "75011 Paris, France",
        lat: 48.8614,
        lng: 2.3787,
        description: "A warm and inviting one-bedroom apartment near Richard Lenoir. Features exposed brick and a beautiful custom-built kitchen.",
        link: "#"
    }
];

window.realEstateApp = {
    map: null,
    markers: [],
    infoWindow: null,
    debounceTimer: null,

    initMap: function() {
        // Paris coordinates
        const paris = { lat: 48.8566, lng: 2.3522 };
        
        // Ensure google maps is loaded
        if (typeof google === 'undefined' || !google.maps) {
            console.error("Google Maps API failed to load or is missing key.");
            return;
        }

        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: paris,
            styles: [],
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true,
            gestureHandling: 'greedy' // makes it easier to use on desktop/mobile
        });

        this.infoWindow = new google.maps.InfoWindow();
        this.renderMarkers();
        this.renderListings(mockProperties); // Initial render
        
        // Initialize noUiSlider
        const priceSlider = document.getElementById('price-slider');
        if (priceSlider && typeof noUiSlider !== 'undefined') {
            noUiSlider.create(priceSlider, {
                start: [0, 5000000],
                connect: true,
                step: 50000,
                range: {
                    'min': 0,
                    'max': 5000000
                },
                format: {
                    to: function (value) { return Math.round(value); },
                    from: function (value) { return Number(value); }
                }
            });
            
            priceSlider.noUiSlider.on('update', () => {
                this.updatePriceDisplay();
            });
            
            priceSlider.noUiSlider.on('change', () => {
                this.debounceApplyFilters();
            });
        }
    },

    formatPrice: function(price) {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
    },

    createMarkerContent: function(property) {
        const div = document.createElement('div');
        div.className = 'bg-white px-3 py-1.5 rounded-full shadow-md border border-slate-200 text-sm font-bold text-slate-800 hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer transform hover:scale-105';
        
        let displayPrice = property.price >= 1000000 
            ? '€' + (property.price / 1000000).toFixed(1) + 'M' 
            : '€' + (property.price / 1000).toFixed(0) + 'k';
            
        div.innerHTML = displayPrice;
        return div;
    },

    renderMarkers: function() {
        // Clear old markers
        this.markers.forEach(marker => marker.setMap(null));
        this.markers = [];

        mockProperties.forEach(property => {
            // Check if google maps AdvancedMarkerElement is available (beta API), otherwise fallback to standard Marker
            // Standard Marker for simplicity and broadest compatibility without needing a map ID
            const marker = new google.maps.Marker({
                position: { lat: property.lat, lng: property.lng },
                map: this.map,
                title: property.title,
                // Custom minimalist icon
                icon: {
                    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                    scale: 1.5,
                    anchor: new google.maps.Point(12, 24),
                    fillColor: "#1d4ed8",
                    fillOpacity: 1,
                    strokeWeight: 1,
                    strokeColor: "#ffffff",
                }
            });

            // Keep reference to real property data on the marker object
            marker.propertyData = property;

            marker.addListener("click", () => {
                const contentStr = `
                    <div class="w-64 cursor-pointer" onclick="realEstateApp.showAlert('Opening detailed page for ${property.title}')">
                        <img src="${property.image}" alt="${property.title}" class="w-full h-32 object-cover rounded-t-xl mb-2">
                        <div class="px-3 pb-3">
                            <h3 class="font-bold text-lg text-slate-900">${this.formatPrice(property.price)}</h3>
                            <p class="text-xs text-slate-500 font-medium mb-1 truncate">${property.title}</p>
                            <div class="flex items-center gap-3 text-xs text-slate-700 font-semibold mb-2">
                                <span>${property.rooms} rooms</span>
                                <span>${property.bedrooms} bedrooms</span>
                                <span>${property.area} m²</span>
                            </div>
                        </div>
                    </div>
                `;
                this.infoWindow.setContent(contentStr);
                this.infoWindow.open({
                    anchor: marker,
                    map: this.map,
                    shouldFocus: false,
                });
            });

            this.markers.push(marker);
        });
    },

    renderListings: function(filteredProperties) {
        const container = document.getElementById('listings-container');
        document.getElementById('results-count').innerText = `${filteredProperties.length} Properties`;
        
        if (filteredProperties.length === 0) {
            container.innerHTML = `
                <div class="text-center py-10 opacity-60">
                    <span class="material-symbols-outlined text-4xl mb-2">search_off</span>
                    <p class="text-sm font-medium">No properties match your current filters.</p>
                </div>
            `;
            return;
        }

        let html = '';
        filteredProperties.forEach((prop, index) => {
            // Construct features pills
            let featuresHtml = '';
            if (prop.energyClass) {
                const colorMap = { A: 'bg-green-600', B: 'bg-green-500', C: 'bg-lime-500', D: 'bg-yellow-400', E: 'bg-orange-400', F: 'bg-orange-600', G: 'bg-red-600' };
                featuresHtml += `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold text-white ${colorMap[prop.energyClass]}">DPE ${prop.energyClass}</span>`;
            }
            if (prop.features.includes("Terrace") || prop.features.includes("Balcony")) {
                featuresHtml += `<span class="px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 text-[10px] font-bold">Exterior</span>`;
            }

            html += `
                <article class="bg-white border text-sm border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer listing-card group" style="animation-delay: ${index * 0.05}s" onclick="realEstateApp.panToProperty(${prop.lat}, ${prop.lng})">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${prop.image}" alt="${prop.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute top-3 right-3">
                            <button class="bg-white/90 backdrop-blur rounded-full p-2 text-slate-500 hover:text-red-500 transition-colors shadow-sm focus:outline-none" onclick="event.stopPropagation(); this.classList.toggle('text-red-500'); this.classList.toggle('text-slate-500'); realEstateApp.showAlert('Toggled Favorite')">
                                <span class="material-symbols-outlined text-lg leading-none">favorite</span>
                            </button>
                        </div>
                        <div class="absolute bottom-3 left-3 flex gap-1">
                            ${featuresHtml}
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="text-xl font-bold text-slate-900">${this.formatPrice(prop.price)}</h3>
                        </div>
                        <p class="text-sm font-semibold text-primary mb-2">${prop.type} • ${prop.address}</p>
                        
                        <div class="flex items-center gap-4 text-slate-600 mb-3 border-b border-slate-100 pb-3">
                            <div class="flex items-center gap-1">
                                <span class="material-symbols-outlined text-base">meeting_room</span>
                                <span class="text-sm font-semibold tracking-tight">${prop.rooms}</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="material-symbols-outlined text-base">bed</span>
                                <span class="text-sm font-semibold tracking-tight">${prop.bedrooms} BR</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="material-symbols-outlined text-base">square_foot</span>
                                <span class="text-sm font-semibold tracking-tight">${prop.area} m²</span>
                            </div>
                        </div>
                        
                        <p class="text-slate-500 text-xs line-clamp-2">${prop.description}</p>
                    </div>
                </article>
            `;
        });
        
        container.innerHTML = html;
    },

    panToProperty: function(lat, lng) {
        if (this.map) {
            this.map.panTo({lat, lng});
            this.map.setZoom(16);
            
            // In mobile view, close the list to show the map
            const mapContainer = document.getElementById('map-container');
            if (mapContainer && window.innerWidth < 768) {
                mapContainer.classList.remove('hidden');
            }
        }
    },

    updatePriceDisplay: function() {
        const slider = document.getElementById('price-slider');
        const displaySpan = document.getElementById('price-display-val');
        
        if (slider && slider.noUiSlider && displaySpan) {
            const values = slider.noUiSlider.get();
            let minVal = parseInt(values[0]);
            let maxVal = parseInt(values[1]);

            if (minVal === 0 && maxVal >= 5000000) {
                displaySpan.innerText = 'Any';
            } else if (minVal === 0) {
                displaySpan.innerText = 'Up to ' + this.formatPrice(maxVal);
            } else if (maxVal >= 5000000) {
                displaySpan.innerText = this.formatPrice(minVal) + ' +';
            } else {
                displaySpan.innerText = this.formatPrice(minVal) + ' - ' + this.formatPrice(maxVal);
            }
        }
    },

    debounceApplyFilters: function() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.applyFilters();
        }, 300);
    },

    applyFilters: function() {
        // Collect standard form inputs
        const types = Array.from(document.querySelectorAll('.type-filter:checked')).map(el => el.value);
        
        let minPrice = 0;
        let maxPrice = Infinity;
        const slider = document.getElementById('price-slider');
        
        if (slider && slider.noUiSlider) {
            const values = slider.noUiSlider.get();
            minPrice = parseInt(values[0]);
            maxPrice = parseInt(values[1]);
            if (maxPrice >= 5000000) maxPrice = Infinity;
        }
        
        const rawMinArea = document.getElementById('filter-minArea').value;
        const minArea = rawMinArea ? parseInt(rawMinArea) : 0;
        
        const bedRadio = document.querySelector('input[name="minBedrooms"]:checked');
        const minBedrooms = bedRadio ? parseInt(bedRadio.value) : 0;
        
        // Collect Advanced form inputs
        const energyClasses = Array.from(document.querySelectorAll('.energy-filter:checked')).map(el => el.value);
        const requiredFeatures = Array.from(document.querySelectorAll('.feature-filter:checked')).map(el => el.value);

        // Filter data array
        const filteredProperties = mockProperties.filter(p => {
            // Type
            if (types.length > 0 && !types.includes(p.type)) return false;
            // Price
            if (p.price < minPrice || p.price > maxPrice) return false;
            // Area
            if (p.area < minArea) return false;
            // Beds
            if (p.bedrooms < minBedrooms) return false;
            
            // Energy Class
            if (energyClasses.length > 0 && !energyClasses.includes(p.energyClass)) return false;
            
            // Features (must have ALL required features)
            if (requiredFeatures.length > 0) {
                const hasAllFeatures = requiredFeatures.every(f => p.features.includes(f));
                if (!hasAllFeatures) return false;
            }

            return true;
        });

        // Update markers visibility
        this.markers.forEach(marker => {
            const p = marker.propertyData;
            const isVisible = filteredProperties.some(fp => fp.id === p.id);
            marker.setVisible(isVisible);
            
            // Close info window if it's attached to a newly hidden marker
            if (!isVisible && this.infoWindow && this.infoWindow.anchor === marker) {
                this.infoWindow.close();
            }
        });

        // Update List
        this.renderListings(filteredProperties);
    },

    clearFilters: function() {
        // Reset inputs
        document.querySelectorAll('.type-filter').forEach(el => el.checked = true);
        
        const slider = document.getElementById('price-slider');
        if (slider && slider.noUiSlider) {
            slider.noUiSlider.set([0, 5000000]);
        }
        
        document.getElementById('filter-minArea').value = '';
        document.querySelectorAll('input[name="minBedrooms"]').forEach(el => {
            el.checked = (el.value === '0');
        });
        
        document.querySelectorAll('.energy-filter:checked').forEach(el => el.checked = false);
        document.querySelectorAll('.feature-filter:checked').forEach(el => el.checked = false);

        this.updatePriceDisplay();
        this.applyFilters();
        this.showAlert("Filters reset");
    },

    showAlert: function(message) {
        const alert = document.getElementById('alert-banner');
        document.getElementById('alert-text').innerText = message;
        
        alert.classList.remove('translate-y-[-150%]');
        
        setTimeout(() => {
            alert.classList.add('translate-y-[-150%]');
        }, 3000);
    }
};

// Map Mobile Toggle Setup
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-map-toggle');
    if(btn) {
        btn.addEventListener('click', () => {
            const mapContainer = document.getElementById('map-container');
            mapContainer.classList.remove('hidden');
        });
    }
});
