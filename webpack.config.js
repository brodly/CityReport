const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },
};