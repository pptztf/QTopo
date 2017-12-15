import "./style.css";
import { initParse } from "./parse";
import { initEvents } from "./modules/events";
import { initFactory } from "./modules/factory";
import { initSearch } from "./modules/search";
import { initWindows } from "./windows";

const _ = QTopo.util;
//又暴露了一个方法
window.topo = {
    init: function (iposs) {
        initTopo(iposs);
        initFactory(iposs);
        initWindows(iposs);
        initParse(iposs);
        initEvents(iposs);
        initSearch(iposs);
        const addEvents = QTopo._initMenu(iposs.dom, iposs.stage, iposs.scene, iposs.menus);
        addEvents(iposs.events);
    }
};

//-------初始化QTopo 得到图层对象

function initTopo(iposs) {
    const stage = QTopo(iposs.dom, {
        background: iposs.background
    }),//场景对象
        scene = stage.add(),//场景中增加一个图层
        moved = new Set();
    iposs.stage = stage;
    iposs.scene = scene;
    initComponent(iposs);
    scene.on("mousedrag", function (e) {
        if (e.target && _.isNode(e.target)) {
            moved.add(e.target);
        }
    });
    scene.data({
        moved: moved,
        high_light: false,//控制相关高亮
        high_light_manage: false,//控制管理高亮
        go_back: false,
        cut_elements: null//是否正在剪切
    });
}

function initComponent(iposs) {
    const alert = QTopo.initAlert(iposs),
        confirm = QTopo.initConfirm(iposs),
        progress = QTopo.initProgress(iposs),
        tips = QTopo.initTips(iposs),
        loading = QTopo.initLoading({
            dom: iposs.dom,
            type: 0,
            logo: iposs.imagePath + "logo.png"
        });
    let timeoutId = null,
        preTargt = null;
    iposs.scene
        .on('mousemove', e => {
            var element = e.target;
            if (_.isNode(element)) {
                tips.open(
                    element.$data.title,
                    e.offsetX, e.offsetY,
                    'top'
                );
                clearTimeout(timeoutId);
            } else if (_.isLink(element)) {
                if (preTargt !== element) {
                    clearTimeout(timeoutId);
                    var start = element.$path[0],
                        end = element.$path[1];
                    timeoutId = setTimeout(
                        function () {
                            iposs.factory.linkCount(element.$id)
                                .then(data => {
                                    tips.open(
                                        `<div>${start.$data.title}</div>
                                        <div style=" text-align:center "><i class="icon-arrow-down"></i></div>
                                        <div style="margin-bottom:10px">${end.$data.title}</div>`
                                        + _.reduce(data, (value, name) => `<div>${name} : ${value}</div>`)
                                        ,
                                        e.offsetX, e.offsetY, 'top')
                                });
                        },
                        1500
                    );
                }
            }
            else {
                tips.close();
                clearTimeout(timeoutId);
            }
            preTargt = e.target;
        })
        .on("mousedown", function () {
            clearTimeout(timeoutId);
            tips.close();
        });
    Object.assign(iposs, {
        tips,
        loading,
        alert(text, title) {
            alert.open({
                title: title || "提示",
                content: text
            });
        },
        confirm(text, title) {
            return confirm.open({
                title: title || "操作确认",
                content: text
            });
        },
        progress(state, info, warning) {
            progress.open({
                state, info, warning
            });
        },
        closeProgress(text) {
            if (progress.isShow()) {
                iposs.progress(100, text, true);
            }
        }
    });
}
