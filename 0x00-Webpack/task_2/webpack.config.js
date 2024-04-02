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
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'assets/images',
              publicPath: 'assets/images',
            },
          },
        ],
      },
    ],
 },
 mode: 'production',
};
