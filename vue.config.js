const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        common: "@/common",
        views: "@/views"
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/css/index.less")]
    }
  },
  devServer: {
    open: true,
    host: '192.168.1.6',
    port: 8000
  }
};
