const autoprefixer = require("autoprefixer");
const postCSSJanus = require("postcss-janus");

module.exports = {
  plugins: [autoprefixer(), postCSSJanus({ prefixes: "html[dir='rtl']" })]
};
