// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      tstyles: path.resolve(
        __dirname,
        "node_modules/@tekion/tekion-styles-next/scss"
      ),
      tbase: path.resolve(__dirname, "node_modules/@tekion/tekion-base"),
    },
  },
};
