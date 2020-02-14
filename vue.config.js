const webpack = require("webpack");

module.exports = {
  pages: {
    core: "src/core/main.js",
    classic: "src/skins/vector-classic/main.js",
    index: "src/skins/dip-phase1/main.js",
    p2: "src/skins/dip-phase2/main.js"
  },
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
  }
};
