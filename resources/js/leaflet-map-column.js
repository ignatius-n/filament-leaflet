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
                    lat: state ? state[this.config.state.latitudeFieldName] : this.config.defaultCoord[0],
                    lng: state ? state[this.config.state.longitudeFieldName] : this.config.defaultCoord[1]
                }
            },

            /**
             * Update the pick marker position
             */
            setupPickMarker(lat, lng) {
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
                        this.setupPickMarker(coords.lat, coords.lng);
                    },

                    onMapClick: (lat, lng) => {
                        this.callColumnMethod('handleMapClick', { latitude: lat, longitude: lng });
                    },

                    onLayerClick: (layerId) => {
                        this.callColumnMethod('handleLayerClick', { layerId: layerId });
                    },
                };

                this.mapCore.setupEventHandlers(callbacks);
            },

            /**
             * Call a method on the Livewire component for this column
             */
            callColumnMethod(name, parameters) {
                this.$wire.callTableColumnMethod(config.state.name, config.state.recordKey, name, parameters);
            }
        }
    }

    window.leafletMapColumn = leafletMapColumn;
});