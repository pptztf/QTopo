import {util}from"../util";
let win = require("./temp.html");
const _ = QTopo.util;
export default function (iposs) {
    win = util.initBase(iposs.dom, win);
    util.initFormSubmit(win.find("form"), data=> {
        doWithForm(win, iposs, data);
        win.close();
    });
    initEvent(win, iposs);
    return win;
};
function initEvent(win, {factory}) {
    let form = win.find("form"),
        read = win.find("input[name=readcommunity]"),
        name = win.find("input[name=devname]"),
        ip = win.find("input[name=ip]");
    win.on("window.open", function () {
        let target = win.data("todo").target;
        read.val('');
        ip.val('');
        name.val('');
        factory.deviceIp(target.data("ip")).then(ip=> {
            util.setFormInput(form, {
                devname: target.$style.textValue,
                ip: ip
            })
        });
    });
}
function doWithForm(win, iposs, data) {
    let target = win.data("todo").target;
    data.deviceId = target.data('id');
    data.flag = 1;
    iposs.factory.editNode(data).then(e=> {
        console.info("修改设备属性成功!");
        target.$style.textValue = data.devname;
    });
}