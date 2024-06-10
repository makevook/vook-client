import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@vook-client/design-system'],
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
  webpack(config, { nextRuntime, webpack }) {
    if (!nextRuntime) {
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: '$RefreshReg$ = () => {};\n$RefreshSig$ = () => () => {};\n',
          raw: true,
          entryOnly: true,
          include: /\.css.ts$/,
        }),
      )
    }
    return config
  },
}

export default withVanillaExtract(nextConfig)
