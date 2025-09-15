import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: ['defaults', 'Android >= 5', 'Chrome >= 49', 'Safari >= 10','not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // for async/await
    }),
  ],
})
