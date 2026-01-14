import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/gabrieldc-nobre/cronograma-projeto/",
  define: {
    __BASE_PATH__: JSON.stringify("/gabrieldc-nobre/cronograma-projeto/")
  }
})
