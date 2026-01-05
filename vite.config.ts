import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    // Hapus proxy kosong yang tidak perlu
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    // Kurangi jumlah dependensi yang di-pre-bundle secara paksa untuk mempercepat startup awal
    include: ['react', 'react-dom']
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild'
  }
});