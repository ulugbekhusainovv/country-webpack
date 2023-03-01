const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // mode
  mode: "production", // production // development
  // entry
  entry: {
    main: path.resolve(__dirname, "./src/js/main.js"),
    about: path.resolve(__dirname, "./src/js/about.js"),
  },
  // output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  // plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: "Countrys | Home",
      template: "./src/pages/indexTemp.html",
      filename: "index.html",
      chunks: ["main"],
    }),

    new HtmlWebpackPlugin({
      title: "Countrys | About",
      template: "./src/pages/abouteTemp.html",
      filename: "about.html",
      chunks: ["about"],
    }),
    new MiniCssExtractPlugin(),
  ],
  // devServer

  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
};
/* 
   devserver: {
static: {
  directory: path.resolve(__dirname, "public"),
},
port: 3000,
open: true,
hot: true,
compress: true,
historyApiFallback: true.
  },
  */
