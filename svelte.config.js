const autoPreprocess = require("svelte-preprocess");
const mode = process.env.NODE_ENV;
const dev = mode === "development";
const preprocessConfig = {
  postcss: true,
  pug: true
};

const clientConfig = {
  preprocess: autoPreprocess(preprocessConfig),
  dev,
  hydratable: true,
  emitCss: true
};

const serverConfig = {
  preprocess: autoPreprocess(preprocessConfig),
  generate: "ssr",
  dev
};
module.exports = clientConfig;
