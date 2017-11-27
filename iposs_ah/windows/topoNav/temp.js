var win = require("./temp.html");
export default function (iposs) {
    //win = $(win).hide();
    console.log(iposs.dom, 'ssss');
    $(iposs.dom).append(win);
    return win;
};