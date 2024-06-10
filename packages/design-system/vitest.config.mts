import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [react(), vanillaExtractPlugin()],
  mode: 'verbose',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setupTests.ts',
    reporters: 'verbose',
    css: true,
    exclude: [...configDefaults.exclude],
  },
})
