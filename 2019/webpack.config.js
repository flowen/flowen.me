// webpack v4
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader'
          },
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: 'errors-only',
    open: true
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      title: 'Rou Hun Fan | front-end developer',
      description:
        'I code designs into almost any environment. React, Vue, Gatsby, Wordpress. Some other tools I love to use are GSAP, three.js and jQuery. I consult on UI/UX and designs. I’m a strong communicator and the bridge between developers, designers and project managers.',
      baseurl: 'https://www.flowen.me',
      twitter_handle: '@flowen_nl',
      card: 'https://www.flowen.me/img/twittercard.png',
      fb_id: 'flowen',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new CopyWebpackPlugin([
      {
        from: 'src/img',
        to: 'img'
      }
    ]),
    new WriteFilePlugin()
  ]
};
