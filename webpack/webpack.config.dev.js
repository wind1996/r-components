const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { name } = require('../package.json');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/bundle.[hash:8].js',
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8888,
    // open: true
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, './loader'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              /* your options here */
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                // exportGlobals: true,
                localIdentName: '[local]__[hash:base64:8]',
                // context: path.resolve(__dirname, 'src'),
                // hashPrefix: 'my-hash',
              },
            },
          }, {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: name,
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new StyleLintPlugin({
      context: 'src',
      configFile: path.resolve(__dirname, '../stylelint.config.js'),
      files: '**/*.less',
      failOnError: false,
      quiet: true,
      syntax: 'less',
    }),
  ],
};
