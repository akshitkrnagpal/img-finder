import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'web',
  build: {
    emptyOutDir: true,
    outDir: '../dist/web',
  },
  server: {
    proxy: {
      '/files': 'http://localhost:5000',
      '^/images/.*': 'http://localhost:5000',
    },
  },
  plugins: [react()],
});
