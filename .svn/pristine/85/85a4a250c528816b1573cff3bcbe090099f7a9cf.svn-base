import {util}from"../util";
let win = require("./temp.html");
const _ = QTopo.util;
export default function (iposs) {
    win = util.initBase(iposs.dom, win);
    let form = win.find("form");
    win.on("window.open", function () {
        let target = win.data("todo").target;
        util.setFormInput(form, {
            name: target.$style.textValue
        });
    });
    util.initFormSubmit(form, data=> {
        let target = win.data("todo").target
        data.id = target.data('id');
        data.pid = target.$data.pid;
        data.x = target.$data.x;
        data.y = target.$data.y;
        data.type = target.$data.type;
        iposs.factory.modifyElements(data).then(e=> {
            console.info("修改网段成功!");
            target.$style.textValue= data.segmentName;
        });
        win.close();
    });
    return win;
};