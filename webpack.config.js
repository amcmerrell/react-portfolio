const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
    extensions: ['.js', '.jsx'],
    'alias': {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [
      {
          test: /\.(txt)$/,
          loader: 'static-loader',
          options: {
            name: '[name].[ext]',
          }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        }),
        exclude: /node_modules/
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
          name: './img/[name].[ext]',
          //name: './img/[name].[hash].[ext]',
        }
      },
      {
        test: /\.otf(\?\S*)?$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: './fonts/[name].[ext]'
              //name: './fonts/[name].[hash].[ext]'
            }
          }],
      },
      {
        test: /\.eot(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: './fonts/[name].[ext]'
            //name: './fonts/[name].[hash].[ext]'
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
            name: './fonts/[name].[ext]'
            //name: './fonts/[name].[hash].[ext]'
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
            name: './fonts/[name].[ext]'
            //name: './fonts/[name].[hash].[ext]'
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
            name: './fonts/[name].[ext]'
            //name: './fonts/[name].[hash].[ext]'
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
    new FaviconsWebpackPlugin({
      logo: './app/img/am-logo.png',
      prefix: 'icons/',
      emitStats: false,
    }),
    new ExtractTextPlugin('style.css'),
    new OptimizeCssAssetsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ],
  devtool: 'cheap-module-eval-source'
};
