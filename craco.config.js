module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Here you can do js code that shows in the console when running yarn build
      // console.log("hello world");

      return {
        ...webpackConfig,
        entry: {
          main: [
            env === "development" &&
              require.resolve("react-dev-utils/webpackHotDevClient"),
            paths.appIndexJs,
          ].filter(Boolean),
          content: "./src/chrome/content.js",
          background: "./src/chrome/background.js",
        },
        output: {
          ...webpackConfig.output,
          filename: "[name].js",
        },
        optimization: {
          ...webpackConfig.optimization,
          splitChunks: {
            cacheGroups: {
              default: false,
            },
          },
          runtimeChunk: false,
        },
      };
    },
  },
};
