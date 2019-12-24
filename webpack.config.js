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

      // {
      //   test: /.css$/,
      //   use: [
      //     {loader: 'style-loader'},
      //     {loader: 'css-loader', options: {module: true}}
      //   ]
      // }
    ]
  },

  output : {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};