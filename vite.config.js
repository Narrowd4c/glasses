import { fileURLToPath, URL } from 'node:url'
import path from 'node:path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import liveReload from 'vite-plugin-live-reload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export default defineConfig({
  base:'/glasses/',
  plugins: [
    vue(),
    liveReload(['./index.html', './src/**/*.vue'])
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    // 啟動 server 時預設開啟的頁面
    open: './',
  },
})
