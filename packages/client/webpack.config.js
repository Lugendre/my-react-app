const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkerPlugin = require('worker-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    mode: argv.mode,

    devtool: isDev ? 'source-map' : 'none',

    module: {
      rules: [
        {
          test: /\.[tj]sx$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json', '.mjs', '.wasm'],
    },
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin()],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'html/index.html'),
      }),
      new CleanWebpackPlugin(),
      new WorkerPlugin(),
      new MiniCssExtractPlugin(),
    ],
  };
};
