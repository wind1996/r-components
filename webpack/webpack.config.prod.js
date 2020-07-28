const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { name } = require('../package.json');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/bundle.[hash:8].js',
  },
  mode: 'production',
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]__[hash:base64:8]',
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
    new MiniCssExtractPlugin({
      filename: 'css/main.[contentHash:8].css', // contentHash:8尽大可能使资源命中缓存
    }),
  ],

  optimization: {
    // 压缩 css
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
};
