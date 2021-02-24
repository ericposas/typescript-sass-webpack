const path = require('path');
const htmlplugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        use: [
           'style-loader', 'css-loader', 'sass-loader', 'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlplugin({
      template: path.resolve(__dirname, 'dist/index.html')
    })
  ]
}
