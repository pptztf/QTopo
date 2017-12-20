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
    var vendor = win.find("select[name=vendorId]");
    var modelList = win.find("select[name=serial]");
    win.on("window.open", function () {
        let target = win.data("todo").target;
        var pMap = arrToMap(target.$data.p);
        vendor.empty();
        modelList.empty();
        factory.vendorList(vendor, pMap.get('vendorId')||-1);
        util.setFormInput(form, {
            name: target.$style.textValue,
            ip: pMap.get('loopbackIp'),
            readcommunity: pMap.get('readcommunity'),
        });

    });
    vendor.change(()=> {
        let id = vendor.val();
        modelList.empty();
        if (id == -1) {
            modelList.attr("disabled", true);
        } else {
            modelList.attr("disabled", false);
            var serial=win.data("todo").target.$data.p.filter(e=>{
                if(e.k=='serial'){
                    return e
                }
            })
            factory.deviceMode(modelList, id, serial[0].content || -1);
        }
    });
}
function doWithForm(win, iposs, data) {
    let target = win.data("todo").target;
    var pMap = arrToMap(target.$data.p);
    //data.flag =
    data.pid = target.$data.pid;
    data.id = target.$data.id;
    data.x = target.$data.x;
    data.y = target.$data.y;
    data.mo_id = pMap.get('mo_id') || ' ';
    data.resourceTypeId = pMap.get('resourceTypeId') || ' ';
    data.gatherId = pMap.get('gatherId') || ' ';
    data.isReal = pMap.get('isReal') || ' ';
    iposs.factory.editNode(data).then(e=> {
        console.info("修改设备类型成功!");
        target.data("type", Number(data.device_model));
    });
}
//将p数组的值转为map
function arrToMap(arr){
    var arrMap = new Map();
    arr.forEach((e)=>{
        arrMap.set(e.k, e.content);
    })
    return arrMap;
}