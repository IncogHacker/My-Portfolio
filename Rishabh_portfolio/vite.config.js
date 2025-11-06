import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',   // relative paths for Netlify
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main2: resolve(__dirname, 'main.html'), 
        contact: resolve(__dirname, 'contact.html') // add your cart page
        // about: resolve(__dirname, 'About.html'),    // add more pages if needed
      }
    }
  }
})