import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: ['file-loader']
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = {
    test: /\.(jsx?|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'uk'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev
        ? 'style-loader'
        : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.endsWith('.module.scss'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}
