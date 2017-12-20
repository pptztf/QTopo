import "./style.css";
import { initEvents } from "./modules/events";
import { initFactory } from "./modules/factory";
import { initSearch } from "./modules/search";
import { initPainter } from "./modules/painter";
import { initWindows } from "./windows";
import { initParse } from "./parse";
const _ = QTopo.util;

window.topo = {
    init: function (iposs) {
        //处理初始化数据,绑定元素
        initTopo(iposs);
        //工程,统一管理ajax请求
        initFactory(iposs);
        //窗口,统一管理窗口开关
        initWindows(iposs);
        //topo事件,注册预定义事件
        initEvents(iposs);
        //解析器,解析参数匹配QTopo元素
        initParse(iposs);
        //绘制,管理画图
        initPainter(iposs);
        //特殊搜索窗口初始化
        initSearch(iposs);
        //组装右键菜单
        const addEvents = QTopo._initMenu(iposs.dom, iposs.stage, iposs.scene, iposs.menus);
        addEvents(iposs.events);

    }

};

//-------初始化QTopo 得到图层对象

function initTopo(iposs) {
    const stage = QTopo(iposs.dom, {
        background: iposs.background
    }), //场景对象
        scene = stage.add(), //场景中增加一个图层
        moved = new Set();
    iposs.stage = stage;
    iposs.scene = scene;
    initComponent(iposs);
    scene.on("mousedrag", function (e) {
        if (e.target && (_.isNode(e.target) || e.target.$data.type=='group')) {
            moved.add(e.target);
        }
    });
    scene.on("mouseup", function (e) {
        console.info(e);
        const target = e.target;
        if (e.button == 0 && _.isNode(target) && !target.$group) {
            const group = scene.searchPoint([e.x, e.y], "group");
            if (group) {
                iposs
                    .confirm(`是否加入分组${group.$style.textValue}`)
                    .ok(() => {
                        const addNodes = _.filter(scene.$selected, n => _.isNode(n) && !n.$group);
                        iposs.factory.in_group({
                            id: group.$id,
                            objids: addNodes.map(n => n.$id).join(",")
                        }).then(e => {
                            group.add(...addNodes);
                        });
                    });
            }
        }
    })
    scene.data({
        moved: moved,
        high_light: false, //控制相关高亮
        high_light_manage: false, //控制管理高亮
        go_back: false,
        cut_elements: null //是否正在剪切
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
                state,
                info,
                warning
            });
        },
        closeProgress(text) {
            if (progress.isShow()) {
                iposs.progress(100, text, true);
            }
        }
    });
}

//得到参数

