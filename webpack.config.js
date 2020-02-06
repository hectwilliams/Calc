const path = require('path');

module.exports = {
  entry: './client/index.jsx',

  resolve: {
    extensions :['.js', '.jsx'],
  },

  module: {
    rules: [

      {
        test: /.(js|jsx)$/,
        use: [
          {loader: 'babel-loader'}
        ],
        exclude: /(node_modules)/
      },

      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader', options: { modules: true } },
        ],
      },

      {
        test: /.+(png|jpe?g|svg)$/,
        use: [
          { loader: 'file-loader'}
        ],
      }
    ]
  },

  output : {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};