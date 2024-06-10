import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import postcssPresetEnv from 'postcss-preset-env'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import { peerDependencies } from './package.json'
import path from 'path'

const shared = {
  external: Object.keys(peerDependencies ?? {}),
  postcss: {
    plugins: [
      postcssPresetEnv({
        browsers: ['> 0.2% and not dead'],
        features: {
          'color-mix': true,
          'light-dark-function': true,
          'media-query-ranges': true,
          'cascade-layers': true,
        },
      }),
    ],
  },
}

const vanillaExtract = defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: {
        index: 'src/index.ts',
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'dist/vanilla-extract',
      },
      external: [...shared.external, /^@vanilla-extract/],
    },
  },
  plugins: [react(), dts({ outDir: 'dist/vanilla-extract' })],
})

// const chunk = defineConfig({
//   build: {
//     sourcemap: true,
//     cssCodeSplit: true,

//     lib: {
//       entry: {
//         theme: 'src/theme/index.ts',
//         button: 'src/button/index.tsx',
//         textarea: 'src/textarea/index.tsx',
//       },
//       formats: ['es', 'cjs'],
//     },
//     rollupOptions: {
//       output: {
//         dir: 'dist/chunk',
//       },
//       external: shared.external,
//     },
//   },
//   plugins: [react(), vanillaExtractPlugin(), dts({ outDir: 'dist/chunk' })],
//   css: {
//     postcss: shared.postcss,
//   },
// })

const bundle = defineConfig({
  build: {
    cssMinify: true,
    minify: true,
    sourcemap: true,
    cssCodeSplit: false,

    lib: {
      entry: {
        index: 'src/index.ts',
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'dist/bundle',
      },
      external: shared.external,
    },
  },
  plugins: [
    react(),
    vanillaExtractPlugin(),
    dts({ outDir: 'dist/bundle' }),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, './public'),
          dest: './bundle',
        },
      ],
    }),
  ],
  css: {
    postcss: shared.postcss,
  },
})

export default defineConfig(({ mode }) => {
  switch (mode) {
    case 've':
      return vanillaExtract
    case 'bundle':
      return bundle
    default:
      return bundle
  }
})
