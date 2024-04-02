const path = require('path');

module.exports = {
 entry: path.resolve(__dirname, './js/dashboard_main.js'),
 performance: {
    maxAssetSize: 1000000,
  },
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
