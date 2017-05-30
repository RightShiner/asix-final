const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    './src/app.js',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.join(__dirname, './src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
        envConstants: path.join(__dirname, 'envConstants', process.env.NODE_ENV)
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            failOnWarning: false,
            failOnError: true
          }
        }],
        include: [ path.resolve(__dirname, 'src/') ],
      },
      {
        test: /\.js$/,
        include: [ path.resolve(__dirname, 'src/') ],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: [ path.resolve(__dirname, 'src/') ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
              plugins: () => [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [ path.resolve(__dirname, 'src/') ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules/'),
          path.resolve(__dirname, 'src/stylesheets/')
        ],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'node_modules/'),
          path.resolve(__dirname, 'src/stylesheets/')
        ],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline',
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, 'src/img/')
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024
            }
          }
        ]
      }
    ]
  },
  devServer: {
    stats: 'errors-only',
  },
  watchOptions: {
    poll: 2000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body',
      favicon: './src/favicon.png'
    }),
    new WebpackShellPlugin({
      onBuildStart: ['clear && echo -e "\033[0;32m============= `date`" && echo "\033[0m"'],
      dev: false
    }),
    new ExtractTextPlugin('extractedStyles.css'),
    new webpack.ProvidePlugin({ jQuery: 'jquery' })
  ],
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }
}
