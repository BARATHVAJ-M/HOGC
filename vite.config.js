import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/HOGC/', // Ensures all static assets resolve correctly on GitHub Pages
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    host: true
  }
});
