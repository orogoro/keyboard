const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
