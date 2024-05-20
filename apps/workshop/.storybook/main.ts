import type { StorybookConfig } from '@storybook/react-vite'

import { join, dirname } from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { mergeConfig } from 'vite'

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: [
    {
      directory: '../../../packages/design-system/src/**',
      titlePrefix: 'Vook-Design-System',
      files: '*.stories.*',
    },
    {
      directory: '../../../apps/web/src/**',
      titlePrefix: 'Vook-web',
      files: '*.stories.*',
    },
    {
      directory: '../../../apps/chrome-extension/src/**',
      titlePrefix: 'Vook-extension',
      files: '*.stories.*',
    },
  ],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        plugins: [new MiniCssExtractPlugin()],
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {},
              },
            ],
            exclude: /\.vanilla\.css$/,
          },
          {
            test: /\.vanilla\.css$/i,
            sideEffects: true,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  url: false,
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [require('@vanilla-extract/vite-plugin').vanillaExtractPlugin()],
      esbuild: {
        jsx: 'automatic',
      },
    })
  },
}

export default config
