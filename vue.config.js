const webpack = require("webpack");

module.exports = {
  pages: {
    core: "src/core/main.js",
    vector: "src/skins/Vector/main.js",
    phase1: "src/skins/phase1/main.js",
    phase2: "src/skins/phase2/main.js",
    phase3: "src/skins/phase3/main.js",
    index: "src/skins/VectorNeue/main.js"
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
  }
};
