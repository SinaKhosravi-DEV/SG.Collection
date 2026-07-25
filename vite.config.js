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
        tstar: resolve(__dirname, 'tstar.html'),
        shselin: resolve(__dirname, 'sh-selin.html'),
      },
    },
  },
})