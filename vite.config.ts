import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        outDir: 'resources/dist',
        lib: {
            entry: path.resolve(__dirname, 'resources/js/index.js'),
            name: 'LeafletMap',
            fileName: 'leaflet-map',
            formats: ['umd'],
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
            },
        },
    }
});