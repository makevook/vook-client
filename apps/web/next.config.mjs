import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@vook-client/ui'],
  compiler: {
    styledComponents: true,
  },
}

export default withVanillaExtract(nextConfig)
