const autoPreprocess = require("svelte-preprocess");
const mode = process.env.NODE_ENV;
const dev = mode === "development";
const preprocessConfig = {
  postcss: true,
  pug: true
};

module.exports = {
  preprocess: autoPreprocess(preprocessConfig)
};
