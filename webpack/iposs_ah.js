var path = require("path"),
    config = require("./common");
config.entry = {
    "iposs_ah": path.resolve("./iposs_ah/index.js")
};
module.exports = config;
