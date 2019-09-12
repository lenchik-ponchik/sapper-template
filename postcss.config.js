module.exports = {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  extract: true,
  sourceMap: false,
  plugins: [
    require("@csstools/postcss-sass")(/* node-sass options */),
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 4,
      browsers: "last 10 versions",
      autoprefixer: { grid: true }
    }),
    require("autoprefixer")(),
    require("postcss-csso")
  ]
};
