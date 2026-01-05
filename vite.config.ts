
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
    // Mematikan sourcemap untuk mengurangi penggunaan memori
    sourcemap: false,
    // Membatasi operasi file paralel ke angka paling rendah
    rollupOptions: {
      maxParallelFileOps: 1,
      cache: false,
      output: {
        manualChunks: undefined
      }
    },
    // Mengurangi beban memori saat kompresi
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000
  },
  // Membatasi esbuild secara internal jika memungkinkan
  esbuild: {
    incremental: false,
  }
});
