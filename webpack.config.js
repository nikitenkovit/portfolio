const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const Paths = {
  SRC: path.join(__dirname, 'src'),
  DIST: path.join(__dirname, 'dist'),
};

module.exports = {
  target: "browserslist",
  // target: "web",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: Paths.DIST,
  },
  devServer: {
    contentBase: Paths.DIST,
    open: false,
    port: 3000,
    compress: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.php$/,
        loader: "php-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        loader: 'file-loader',
        options: {
          name: '/[folder]/[name].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: (url) => {
                if (url.includes('.jpg') || url.includes('.png') || url.includes('.svg')) {
                  return false;
                }

                return true;
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[folder]/[name].[ext]'
        }
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: `${Paths.SRC}/assets/index.html`,
      scriptLoading: "blocking"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: `${Paths.SRC}/assets/images`, to: `${Paths.DIST}/images`},
        {from: `${Paths.SRC}/mail.php`, to: `${Paths.DIST}`},
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "source-map"
};
