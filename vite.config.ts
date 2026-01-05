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
    },
    // Menambahkan timeout yang lebih lama untuk lingkungan cloud/proxy
    proxy: {}
  },
  optimizeDeps: {
    // Memaksa Vite untuk melakukan pre-bundle pada dependensi utama
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'lucide-react', 
      'recharts', 
      '@google/genai'
    ]
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    target: 'esnext',
    outDir: 'dist'
  }
});