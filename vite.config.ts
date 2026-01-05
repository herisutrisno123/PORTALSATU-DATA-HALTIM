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
    hmr: {
      overlay: false
    }
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    // Membatasi operasi paralel seminimal mungkin untuk menghindari thread limit
    rollupOptions: {
      maxParallelFileOps: 1,
      cache: false,
      output: {
        manualChunks: undefined
      }
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000
  }
});