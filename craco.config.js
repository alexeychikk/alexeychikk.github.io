const { whenDev } = require("@craco/craco");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.plugins = (
        webpackConfig.resolve.plugins || []
      ).concat([new TsconfigPathsPlugin()]);

      webpackConfig.plugins.push(
        new BundleAnalyzerPlugin({
          openAnalyzer: false,
          analyzerMode: whenDev(() => "server", "static"),
        })
      );

      webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
          filename: "404.html",
          template: "public/404.html",
          inject: false,
        })
      );

      return webpackConfig;
    },
  },
};
