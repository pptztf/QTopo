import {util}from"../util";
let win = require("./temp.html");
const _ = QTopo.util;
export default function (iposs) {
    win = util.initBase(iposs.dom, win);
    initEvent(win, iposs.factory);
    //劫持表单
    util.initFormSubmit(win.find("form"), function (data) {
        if (data.gatherId != -1) {
            doWithForm(win, iposs, data);
            win.close();
        } else {
            iposs.alert("请选择采集点");
        }


    });
    return win;
};
function initEvent(win, factory) {
    //var gatherId = win.find("select[name=gatherId]");
    var segmentName = win.find("input[name=name]");
    win.on("window.open", e=> {
        segmentName.val('');
        //gatherId.empty();
        //factory.userGather(gatherId);
    });
}
function doWithForm(win, iposs, data) {
    //设置网段的额xy轴坐标
    [data.x = 0, data.y = 0] = win.data("todo").position;
    [data.visible, data.zindex, data.style, data.icon]=[1, 0, '', 'yun5.png'];
    //设置父亲网段的id
    data.pid = iposs.scene.data("pid");
    iposs.factory.addSegment(data)
        .then(json=> {
            console.info("添加网段成功!");
            iposs.addNode(json.Device);
            iposs.events.TopoEvent_REFRESH();
        });
}