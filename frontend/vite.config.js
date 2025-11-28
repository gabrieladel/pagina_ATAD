import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ¡Añade esta línea!
  // El valor debe ser el nombre de tu repositorio, rodeado de barras inclinadas.
  base: '/pagina_ATAD/', 
})