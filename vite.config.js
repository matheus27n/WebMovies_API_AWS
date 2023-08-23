import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Change to 'esnext' or 'modules' for modern browsers
    polyfillDynamicImport: false, // Disable dynamic import polyfills
    rollupOptions: {
      output: {
        format: 'iife', // Use IIFE format for the bundle
      },
    },
  },
  define: {global: 'window'} // Define globalThis as window
})
