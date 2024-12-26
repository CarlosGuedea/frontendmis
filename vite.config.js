import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8084",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Elimina '/api' de la ruta antes de hacer la solicitud
      },
    },
    host: true,
    strictPort: true,
  },
  plugins: [react()],
});
