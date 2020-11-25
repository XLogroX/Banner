const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProdaction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProdaction;

const createFileName = (ext) => {
  return isDevelopment ? `bundle.${ext}` : `bundle.[fullHash].${ext}`;
};

const getCssLoaders = () => {
  const loaders = [
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ];

  if (isProdaction) {
    loaders.unshift(MiniCssExtractPlugin.loader);
  } else {
    loaders.unshift('style-loader');
  }

  return loaders;
};

const getJsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ];

  if (isDevelopment) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

console.log(getCssLoaders());

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './js/index.js'],
  output: {
    filename: createFileName('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devtool: isDevelopment ? 'source-map': false,
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/html/index.html'),
      scriptLoading: 'blocking',
      minify: {
        removeComments: isProdaction,
        collapseWhitespace: isProdaction,
      },
    }),
    new MiniCssExtractPlugin({
      filename: createFileName('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: getCssLoaders(),
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: getJsLoaders(),
      },
    ],
  },
};
