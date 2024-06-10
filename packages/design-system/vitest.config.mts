import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig } from 'vitest/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: 'verbose',
    watch: true,
    css: true,
  },
})
