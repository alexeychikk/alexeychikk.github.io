const { whenDev } = require("@craco/craco");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

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

      return webpackConfig;
    },
  },
};
