const path = require('path');

module.exports = {
 entry: './js/dashboard_main.js',
 output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
 },
 module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
    ],
 },
 mode: 'production',
};
