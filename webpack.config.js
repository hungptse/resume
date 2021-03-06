const path = require("path");
const hwp = require("html-webpack-plugin");
const stylish = require('webpack-stylish');
module.exports = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist")
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  devServer: {
    host: "localhost",
    port: 3000
  },
  plugins: [
    new hwp({
      template: path.join(__dirname, "/src/index.html"),
      favicon: "public/icon.png"
    }),
    new stylish(),
  ]
};
