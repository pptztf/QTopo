var path = require("path"),
    config = require("./common");
config.entry = {
    "core": path.resolve("./core/index.js")//入口文件
};
module.exports = config;
