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
    var form = win.find("form");
    var vendor = win.find("select[name=vendor_id]");
    var modelList = win.find("select[name=device_model]");
    win.on("window.open", function () {
        let target = win.data("todo").target;
        console.log(win,'windata');
        vendor.empty();
        modelList.empty();
        factory.deviceIp(target.data("ip")).then(ip=> {
            util.setFormInput(form, {
                devname: target.$style.textValue,
                ip: ip
            })
        });
        factory.vendorList(vendor);
    });
    vendor.change(()=> {
        let id = vendor.val();
        modelList.empty();
        if (id == -1) {
            modelList.attr("disabled", true);
        } else {
            modelList.attr("disabled", false);
            factory.deviceMode(modelList, id);
        }
    });
}
function doWithForm(win, iposs, data) {
    let target = win.data("todo").target;
    data.deviceId = target.data('id');
    data.flag = 2;
    iposs.factory.editNode(data).then(e=> {
        console.info("修改设备类型成功!");
        target.data("type", Number(data.device_model));
    });
}