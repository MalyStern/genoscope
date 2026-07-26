import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the project at /<repo>/, so the base must match the repo name.
// Override with VITE_BASE=/ for local/other hosting.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/genoscope/',
  plugins: [react(), tailwindcss()],
})
