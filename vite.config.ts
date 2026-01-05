
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  },
  // Membatasi worker seminimal mungkin karena limit OS thread server rendah
  worker: {
    format: 'es',
    plugins: () => [react()],
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild',
    // Mengurangi beban konkurensi saat build
    cssCodeSplit: true,
    rollupOptions: {
      maxParallelFileOps: 2
    }
  }
});
