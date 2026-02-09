import { LeafletMapCore } from './leaflet-map-core';

document.addEventListener('livewire:init', () => {
    const leafletMapField = ($wire, config) => {
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
                this.watchState();
            },

            /**
             * Get the current state from the field
             */
            getState() {
                if (!this.config.state) return undefined;

                const state = this.$wire.get(this.config.state.statePath);
                return {
                    lat: state ? state[this.config.state.latitudeFieldName] : this.config.defaultCoord[0],
                    lng: state ? state[this.config.state.longitudeFieldName] : this.config.defaultCoord[1]
                }
            },

            /**
             * Set the state of the field
             */
            setState(lat, lng) {
                if (!this.config.state) return;

                this.updatePickMarker(lat, lng);

                this.$wire.set(this.config.state.statePath, {
                    [this.config.state.latitudeFieldName]: lat,
                    [this.config.state.longitudeFieldName]: lng
                });
            },

            /**
             * Watch for changes in the field state
             */
            watchState() {
                if (!this.config.state) return;

                this.$watch('state', (value) => {
                    // Update Livewire when local state changes
                    this.setState(value.lat, value.lng);
                });
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
                    },

                    onMapClick: (lat, lng) => {
                        if (!this.config.state.disabled) {
                            this.setState(lat, lng);
                        }

                        this.callFieldMethod('handleMapClick', { latitude: lat, longitude: lng });
                    },

                    onLayerClick: (layerId) => {
                        this.callFieldMethod('handleLayerClick', { layerId: layerId });
                    },
                };

                this.mapCore.setupEventHandlers(callbacks);
            },

            /**
             * Call a method on the Livewire component for this field
             */
            callFieldMethod(name, parameters) {
                this.$wire.callSchemaComponentMethod(config.state.key, name, parameters);
            }
        }
    }

    window.leafletMapField = leafletMapField;
});