import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',       // Ensure it's root
  plugins: [react()],
  build: {
    outDir: 'dist',  // Default for Vite
  }
})
