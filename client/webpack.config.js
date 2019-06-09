const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, 'public/index.html'), path.resolve(__dirname, 'public/index.ts')],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public-dist')
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'public'), path.resolve(__dirname, '../node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: 'ts-loader'
      }
    ]
  }
};