import {util}from"../util";
let win = require("./temp.html");
const _ = QTopo.util;
export default function (iposs) {
    win = util.initBase(iposs.dom, win);
    let form = win.find("form");
    win.on("window.open", function () {
        let target = win.data("todo").target;
        util.setFormInput(form, {
            segmentName: target.$style.textValue
        });
    });
    util.initFormSubmit(form, data=> {
        let target = win.data("todo").target;
        data.flag = 4;
        data.deviceId = target.data('id');
        iposs.factory.editNode(data).then(e=> {
            console.info("修改网段成功!");
            target.$style.textValue= data.segmentName;
        });
        win.close();
    });
    return win;
};