const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const content = require('autoprefixer');


module.exports = {
  entry: [
    './src/app.js',
    './src/stylesheets/app.scss'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    modules: [
      path.join(__dirname, './src'),
      'node_modules'
    ],
    extensions: [ '.js', '.jsx', '.css', '.scss' ],
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
              plugins: () => [
                content
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
                plugins: () => [
                  content
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
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('extractedStyles.css'),
    new webpack.ProvidePlugin({ jQuery: 'jquery' })
  ]
};
