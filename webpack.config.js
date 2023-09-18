const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const pkg = require("./package.json");

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, "public", "index.html"),
    favicon: path.join(__dirname, "public", "favicon.ico"),
  }),
];
if (process.env.ENV === "GH_PAGES") {
  plugins.push(
    new webpack.DefinePlugin({
      "process.env.BASENAME": JSON.stringify(
        pkg.homepage.replace(/^.+\.github\.io/, "").replace(/\/$/, ""),
      ),
    }),
  );
}

const common = {
  plugins,
  entry: "./src",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?|mjs)$/,
        exclude: [
          /node_modules[\\/]core-js/,
          /node_modules[\\/]webpack[\\/]buildin/,
        ],
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".mjs", ".wasm"],
  },
};

const dev = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
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
