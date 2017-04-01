const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  },
  module: {
    // rules: [
    //   {
    //     test: /\.scss$/,
    //     use: ExtractTextPlugin.extract({
    //       loader: ['css', 'postcss', 'sass']
    //     })
    //   },
    //   {
    //     loader: 'babel-loader',
    //     query: {
    //       presets: ['react', 'es2015']
    //     },
    //     test: /\.jsx?$/,
    //     exclude: /(node_modules|bower_components)/
    //   },
    //   {
    //     test: /\.(jpg|png|svg)$/,
    //     loader: 'file-loader',
    //     options: {
    //       name: '[path][name].[hash].[ext]',
    //     }
    //   },
    // ],
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          [
            { loader: 'css' },
            { loader: 'postcss' },
            { loader: 'sass' }
          ]
        )
      }
      // {
      //   test: /\.scss$/,
      //   loaders: ['style', 'css', 'postcss', 'sass'],
      // },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
  ],
  devtool: 'cheap-module-eval-source'
};
