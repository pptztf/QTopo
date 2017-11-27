import {util}from"../util";
let win = require("./temp.html");
const _ = QTopo.util;
export default function (iposs) {
    win = util.initBase(iposs.dom, win);
    initEvent(win, iposs.factory);
    //劫持表单
    util.initFormSubmit(win.find("form"), function (data) {
        if(data.gatherId!=-1){
            doWithForm(win, iposs, data);
            win.close();
        }else{
            iposs.alert("请选择采集点");
        }
    });
    return win;
};
function initEvent(win, factory) {
    var gatherId = win.find("select[name=gatherId]");
    var segmentName = win.find("input[name=segmentName]");
    win.on("window.open", e=> {
        segmentName.val('');
        gatherId.empty();
        factory.userGather(gatherId);
    });
}
function doWithForm(win, iposs, data) {
    [data.x = 0, data.y = 0] = win.data("todo").position;
    data.pid = iposs.scene.data("pid");
    iposs.factory.addSegment(data)
        .then(json=> {
            console.info("添加网段成功!");
            iposs.addNode(json.Device);
        });
}