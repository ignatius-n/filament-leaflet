import { LeafletMapCore } from './leaflet-map-core';

document.addEventListener('livewire:init', () => {
    const leafletMapColumn = ($wire, config) => {
        return {
            mapCore: null,
            config,
            $wire,
            state: undefined,
            pickMarker: null,

            init() {
                this.mapCore = new LeafletMapCore(this.config);
                this.state = this.getState();
                this.mapCore.init();
                this.setupEventHandlers();
            },

            /**
             * Get the current state from the field
             */
            getState() {
                if (!this.config.state) return undefined;

                const state = this.config.state.state;
                return {
                    lat: state ? state[this.config.state.latitudeFieldName] : 0,
                    lng: state ? state[this.config.state.longitudeFieldName] : 0
                }
            },

            /**
             * Update the pick marker position
             */
            updatePickMarker(lat, lng) {
                if (this.pickMarker) {
                    Alpine.raw(this.pickMarker).removeFrom(Alpine.raw(this.mapCore.map));
                }

                let markerOptions = this.config.state.pickMarker;
                markerOptions.lat = lat;
                markerOptions.lng = lng;

                this.pickMarker = this.mapCore.createMarker(markerOptions);

                Alpine.raw(this.pickMarker).addTo(Alpine.raw(this.mapCore.map));
            },

            /**
             * Setup field-specific event handlers
             */
            setupEventHandlers() {
                const callbacks = {
                    onMapLoad: () => {
                        const coords = this.getState();
                        this.updatePickMarker(coords.lat, coords.lng);
                    }
                };

                this.mapCore.setupEventHandlers(callbacks);
            }
        }
    }

    window.leafletMapColumn = leafletMapColumn;
});