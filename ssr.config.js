import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx', 'resources/css/app.css'],
            ssr: 'resources/js/ssr.jsx', // Enable SSR
            publicDirectory: 'public',
            buildDirectory: 'bootstrap',
            refresh: true,
        }),
        react(),
    ],
    build: {
        ssr: true, // Enable SSR
        outDir: 'bootstrap',
        rollupOptions: {
            input: 'resources/js/ssr.jsx',
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name][extname]',
                manualChunks: undefined, // Disable automatic chunk splitting
            },
        },
    },
});
