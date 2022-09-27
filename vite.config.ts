import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [
    vue(),
    eslintPlugin()
  ]
})
