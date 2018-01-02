var win = require("./temp.html");
export default function (iposs) {
    $(iposs.dom).append(win);
    return win;
};