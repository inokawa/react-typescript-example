const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const common = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "public", "index.html"),
      favicon: path.join(__dirname, "public", "favicon.ico"),
    }),
  ],
  entry: "./src",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};

const dev = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};

const prod = {
  mode: "production",
};

module.exports = function () {
  if (process.env.NODE_ENV === "production") {
    return { ...common, ...prod };
  } else {
    return { ...common, ...dev };
  }
};
