import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        p1: resolve(__dirname, 'p1.html'),
        p2: resolve(__dirname, 'p2.html'),
        p3: resolve(__dirname, 'p3.html'),
      },
    },
  },
})