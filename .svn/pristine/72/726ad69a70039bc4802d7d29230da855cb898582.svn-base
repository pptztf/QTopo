import {parseLayer,parseAlarm} from "./modules/parse";
import {events} from"./modules/events";

const _ = QTopo.util;
console.info(_.dateFormat(new Date(), "yyyy/MM/dd hh:mm:ss"));
window.topo = {
    init: function (dom, config) {
        const stage = QTopo(dom, {
                background: config.background
            }),
            scene = stage.add();
        makeMenus(dom, stage, scene, config.url.menu);
        index(scene, config.url).done(()=>scene.centerZoom());
    }
};

function makeMenus(dom, stage, scene, url) {
    $.ajax(url)
        .done(json=> {
            json = _.toJson(json);
            const menus = json.menus.cmenus.menu,
                addEvents = QTopo._initMenu(dom, stage, scene, menus);
            addEvents(events);
        });
}

function index(scene, url) {
    return $.ajax(url.topo)
        .done(data=> {
            data = parseLayer(_.toJson(data));
            console.info(data);
            scene.addByJson(data);
        });
}
