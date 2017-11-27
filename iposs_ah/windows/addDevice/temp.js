import {util}from"../util";
let win = require("./temp.html");
const _ = QTopo.util;
export default function (iposs) {
    win = util.initBase(iposs.dom, win);
    initEvent(iposs.factory, win);
    //劫持表单
    util.initFormSubmit(win.find("form"), data=> {
        doWithForm(win, iposs, data);
        win.close();
    });
    return win;
};
function doWithForm(win, iposs, data) {
    if (_.notNull(win.data("todo"))) {
        let position = win.data("todo").position;
        position = position || [0, 0];
        data.pid = iposs.scene.data("pid");
        data.x = Math.floor(position[0]);
        data.y = Math.floor(position[1]);
        if (data.obj_type == "1") {
            delete data.resource_type_id;
            delete data.vendor_id;
            delete data.device_model;
        }
        iposs.factory.addDevice(data).then(e=> {
            iposs.events.TopoEvent_REFRESH();
            console.info("添加设备成功");
        });
    }
}
function initEvent(factory, win) {
    const vendor = win.find("select[name=vendor_id]"),
        modelList = win.find("select[name=device_model]").attr("disabled", true),
        resList = win.find("select[name=resource_type_id]"),
        gather = win.find("select[name=gatherId]"),
        type = initTypeSelect(win);
    win.on("window.open", function (e, d) {
        type("0");
        vendor.empty();
        modelList.empty();
        resList.empty();
        gather.empty();
        factory.vendorList(vendor);
        factory.resourceList(resList);
        factory.userGather(gather);
        util.setFormInput(win, {
            device_ip: '',
            obj_type: "0",
            device_name: "",
            readcommunity: "",
            writecommunity: ""
        });
    });
    vendor.change(function () {
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
function initTypeSelect(win) {
    let vendor = win.find('.vendor'),
        devicType = win.find('.modelList'),
        resourceType = win.find('.resList'),
        type = win.find("select[name=obj_type]");
    type.change(function () {
        select(type.val());
    });
    function select(value) {
        switch (value) {
            case '0':
                vendor.show();
                devicType.show();
                resourceType.show();
                break;
            case '1':
                vendor.hide();
                devicType.hide();
                resourceType.hide();
                break;
        }
    };
    return select;
}
