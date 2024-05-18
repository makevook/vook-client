import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@vook-client/design-system'],
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
}

export default withVanillaExtract(nextConfig)
