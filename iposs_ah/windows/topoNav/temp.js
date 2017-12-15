var win = require("./temp.html");
export default function (iposs) {
    //也需要绑定事件, 但是在这里是绑定不了的
    $(iposs.dom).append(win);
    return win;
};