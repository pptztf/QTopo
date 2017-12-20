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
    let form = win.find("form");
    //获取其中的几个下拉菜单
    let sourceList= form.find(".sourceList");
    let targetList= form.find(".targetList");
    //var modelList = win.find("select[name=serial]");
    //初始化一级下拉菜单
    win.on("window.open", function () {
        //清空button 和ul
        sourceList.find('.btn').html('');
        sourceList.find('.dropdown-menu').html('');
        targetList.find('.btn').html('');
        targetList.find('.dropdown-menu').html('');
        initSelect(sourceList,factory);
        initSelect(targetList,factory);
        //获取数据
        //请求数据
        //填充数据

    });
   
    
}
function initSelect(dom,factory){
    factory.getBuss().then(data=>{
        //往下拉菜单中添加数据
        data.forEach((item,index)=>{
            if(index!=0){
                dom.find('.dropdown-menu').append('<li><a href="#"><span class="bussName">'
                    +item.buss_name+
                    '</span><span class="icon-caret-right rg"></span><ul class="list-group"></ul></a></li>');
            }else{
                dom.find('.btn').html(item.buss_name +'<span class="caret"></span>');
            }
        })
        //添加二级菜单事件
        dom.find('.dropdown-menu>li').mouseenter((e)=>{
            event.stopPropagation();
            //发送数据并添加到li中 ,没有缓存机制,这样很浪费性能
            let bussName = $(e.currentTarget).find('.bussName').text();
            factory.getSwitch(bussName).then(data=>{
                //覆盖前面的值
                $(e.currentTarget).find('.list-group').html('');
                data.forEach((item,index)=>{
                    if(index!=0){
                        $(e.currentTarget).find('.list-group').append('<li class="list-group-item">'+item.switch_ip+'</li>')
                    }
                })
            }).then(()=>{
                $(e.currentTarget).find('.list-group>.list-group-item').click(event=>{
                    //修改下拉菜单的值,并且把值传入某个容器内等待被使用
                    event.stopPropagation();
                    let swithcIp = $(event.currentTarget).text();
                    dom.find('.btn').html(swithcIp+' <span class="caret"></span>').attr('name',bussName).attr('ip',swithcIp);
                    dom.find('.btn-menu').attr('aria-expanded',false);
                    dom.removeClass('open');
                })
            })
        })
    });
}
//给设置发送的值
function doWithForm(win, iposs, data) {
    //拿取值判断是否为空,给予提示,然后发送请求
    let form = win.find("form");
    let sourceList= form.find(".sourceList");
    let targetList= form.find(".targetList");
    var sourceBussName=sourceList.find('.btn').attr('name');
    var sourceIp = sourceList.find('.btn').attr('ip');
    var targetBussName=targetList.find('.btn').attr('name');
    var targetIp = targetList.find('.btn').attr('ip');

    ((sourceBussName && sourceIp) != undefined ) || iposs.alert('源端不能为空');
    ((targetBussName && targetIp) != undefined ) || iposs.alert('目标端不能为空');

    iposs.factory.hostRoute({
        "sourceBussName":sourceBussName,
        "sourceIp":sourceIp,
        "targetBussName":targetBussName,
        "targetIp":targetIp,
    })
}
