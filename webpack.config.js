const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /favicon\.ico$/,
        use: [{
          loader: 'file-loader',
          query: {
            limit: 1,
            name: '[name].[ext]',
          }
        }]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: './img/[name].[hash].[ext]',
        }
      },
      {
        test: /\.otf(\?\S*)?$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: './fonts/[name].[hash].[ext]'
            }
          }],
      },
      {
        test: /\.eot(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: './fonts/[name].[hash].[ext]'
          }
        }]
      },
      {
        test: /\.svg(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            mimetype: 'image/svg+xml',
            limit: 10000,
            name: './fonts/[name].[hash].[ext]'
          }
        }]
      },
      {
        test: /\.ttf(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            mimetype: 'application/octet-stream',
            limit: 10000,
            name: './fonts/[name].[hash].[ext]'
          }
        }]
      },
      {
        test: /\.woff2?(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            mimetype: 'application/font-woff',
            limit: 10000,
            name: './fonts/[name].[hash].[ext]'
          }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './app/index.html',
    }),
    new FaviconsWebpackPlugin('./app/img/am-logo.png'),
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'cheap-module-eval-source'
};
