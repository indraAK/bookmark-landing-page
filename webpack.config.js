const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   // loaders
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: 'html-loader',
         },
         {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: 'images',
                     publicPath: 'images',
                  }
               },
            ],
         }
      ]
   },
   // plugins
   plugins: [new HtmlWebpackPlugin({
      template: './src/template.html'
   })]
}