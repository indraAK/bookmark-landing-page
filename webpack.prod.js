const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = merge(config, {
   mode: 'production',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.[contenthash].js'
   },
   plugins: [
      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
      new CleanWebpackPlugin()
   ],
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               {
                  loader: 'postcss-loader',
                  options: {
                     postcssOptions: {
                        plugins: [
                           [
                              autoprefixer({ grid: 'autoplace' })
                           ]
                        ]
                     }
                  }
               },
               'sass-loader'
            ]
         }
      ]
   }
})