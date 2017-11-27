var path = require("path"),
    config = require("./common");
config.entry = {
    "iposs": path.resolve("./iposs/index.js")
};
module.exports = config;
