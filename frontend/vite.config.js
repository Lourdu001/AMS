// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base: './',
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split big libraries into separate chunks
          react: ['react', 'react-dom'],
          exportLibs: ['jspdf', 'jspdf-autotable', 'exceljs', 'file-saver'],
          vendor: ['axios'] // add other big libs here if needed
        }
      }
    },
    chunkSizeWarningLimit: 1000 // optional: increase limit to suppress the warning
  }
})
