import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    build: {
        outDir: 'resources/dist',
        lib: {
            entry: path.resolve(__dirname, 'resources/js/leaflet-map.js'),
            fileName: 'leaflet-map',
            formats: ['es'],
        },
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'node_modules/leaflet/dist/images/*.png',
                    dest: 'images'
                },
                {
                    src: 'node_modules/leaflet-draw/dist/images/*.png',
                    dest: 'images'
                },
                {
                    src: 'images/*.png',
                    dest: 'images'
                },
            ]
        })
    ]
});