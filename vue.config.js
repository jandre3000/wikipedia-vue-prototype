const webpack = require("webpack");

module.exports = {
  pages: {
    core: "src/core/main.js",
    classic: "src/prototypes/vector-classic/main.js",
    index: "src/prototypes/dip-phase1/main.js",
    p2: "src/prototypes/dip-phase2/main.js",
    p3: "src/prototypes/dip-phase3/main.js"
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
