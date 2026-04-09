import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    base: '/big_space_telegram/',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    server: {
        port: 5174,
        host: true,
    }
});
