import { LeafletMapCore } from './leaflet-map-core';

document.addEventListener('livewire:init', () => {
    const leafletMap = ($wire, config) => {
        return {
            mapCore: null,
            config,
            $wire,
            state: undefined,
            pickMarker: null,

            init() {
                // Inicializa a classe base
                this.mapCore = new LeafletMapCore(
                    this.config,
                    '/vendor/filament-leaflet/images'
                );

                // Para fields, carrega o estado inicial
                if (this.config.field) {
                    this.state = this.getState();
                }

                // Inicializa o mapa com a lógica base
                this.mapCore.init();

                // Configura os event handlers específicos do Filament
                this.setupEventHandlers();

                // Configura listeners do Livewire
                this.setupLivewireListeners();

                // Se for um field, observa mudanças no estado
                if (this.config.field) {
                    this.watchState();
                }
            },

            /**
             * Obtém o estado atual do field
             */
            getState() {
                if (!this.config.field) return undefined;

                const state = this.$wire.get(this.config.field.statePath);
                return {
                    lat: state ? state[this.config.field.latitudeFieldName] : 0,
                    lng: state ? state[this.config.field.longitudeFieldName] : 0
                }
            },

            /**
             * Define o estado do field
             */
            setState(lat, lng) {
                if (!this.config.field) return;

                this.$wire.set(this.config.field.statePath, {
                    [this.config.field.latitudeFieldName]: lat,
                    [this.config.field.longitudeFieldName]: lng
                });
            },

            /**
             * Observa mudanças no estado do field
             */
            watchState() {
                if (!this.config.field) return;

                this.$watch('state', (value) => {
                    // Atualiza o valor no Livewire quando o estado local mudar
                    this.setState(value);
                });
            },

            updatePickMarker(lat, lng) {
                if (this.pickMarker) {
                    Alpine.raw(this.pickMarker).removeFrom(Alpine.raw(this.mapCore.map));
                }

                let markerOptions = this.config.field.pickMarker;
                markerOptions.lat = lat;
                markerOptions.lng = lng;

                this.pickMarker = this.mapCore.createMarker(markerOptions);

                Alpine.raw(this.pickMarker).addTo(Alpine.raw(this.mapCore.map));
            },

            /**
             * Configura event handlers específicos para integração com Filament/Livewire
             */
            setupEventHandlers() {
                const callbacks = {
                    onMapLoad: () => {
                        if (this.config.field) {
                            const coords = this.getState();

                            this.updatePickMarker(coords.lat, coords.lng);
                        }
                    },

                    onMapClick: (lat, lng) => {
                        // Para fields, atualiza o estado usando statePath
                        if (this.config.field) {
                            this.updatePickMarker(lat, lng);

                            this.setState(lat, lng);

                            this.$wire.callSchemaComponentMethod(
                                this.config.field.key,
                                'handleMapClick',
                                {
                                    latitude: lat,
                                    longitude: lng
                                }
                            );
                        } else {
                            this.$wire.call('handleMapClick', lat, lng);
                        }
                    },

                    onLayerClick: (layerId) => {
                        if (this.config.field) {
                            this.$wire.callSchemaComponentMethod(
                                this.config.field.key,
                                'handleLayerClick',
                                { layerId: layerId }
                            );
                        } else {
                            this.$wire.call('handleLayerClick', [layerId]);
                        }
                    },
                };

                this.mapCore.setupEventHandlers(callbacks);
            },

            /**
             * Configura listeners específicos do Livewire
             */
            setupLivewireListeners() {
                window.addEventListener(`update-leaflet-${this.config.mapId}`, (event) => {
                    this.updateMapData(event.detail.config);
                });
            },

            /**
             * Atualiza os dados do mapa
             */
            updateMapData(newConfig) {
                this.config = newConfig;

                const callbacks = {
                    onLayerClick: (layerId) => {
                        if (this.config.field) {
                            this.$wire.callSchemaComponentMethod(
                                this.config.field.key,
                                'handleLayerClick',
                                { layerId: layerId }
                            );
                        } else {
                            this.$wire.call('handleLayerClick', [layerId]);
                        }
                    }
                };

                this.mapCore.updateMapData(newConfig, callbacks);
            }
        }
    }

    window.leafletMap = leafletMap;
});