const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(config, {
   mode: 'development',
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'main.js'
   },
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         }
      ]
   }
})