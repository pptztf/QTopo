import initPaint from "./painter";
import initPath from "./utils/pathCtrl";
const _ = QTopo.util;
export const initEvents = (iposs) => {
    const { windows, scene, factory } = iposs,
        path = initPath(scene);

    let linkCache = {};
    
    Object.assign(iposs, initPaint(iposs));
    //首绘
    factory.index().then(data => iposs.paintLayer(data));

    iposs.events = {

        TopoEvent_DEBUG(position, element, properties) {
            console.info(position, element);
        },

        TopoEvent_GO_DOWN(position, element, properties) {
            const pid = properties.id;
            if (_.notNull(pid)) {
                factory.savePosition().then(() => {
                    path.go();
                    factory.goDown(pid).then(data => iposs.paintLayer(data)).catch(e => errorPath(e));
                });
            }
        },

        TopoEvent_GO_BACK(position, element, properties) {
            return factory.savePosition().then(() => {
                const pid = path.back();
                if (_.notNull(pid)) {
                    return factory.goBack(pid).then(data => iposs.paintLayer(data)).catch(e => errorPath(e));
                }
            });
        },

        TopoEvent_GO_TO(position, element, properties) {
            console.log(properties,'xx');
            const pid = properties.id;
            if (_.notNull(pid)) {
                return factory.savePosition().then(() => {
                    path.go();
                    return factory.goTo(pid).then(data => iposs.paintLayer(data)).catch(e => errorPath(e));
                });
            }
        },

        TopoEvent_REFRESH(position, element, properties) {
            factory.savePosition().then(() => {
                factory.refresh(scene.data("pid")).then(data => iposs.paintLayer(data));
            })
        },

        TopoEvent_GET_LOCATION(position, element, properties) {
            factory.location().then(data => iposs.alert(data));
        },

        TopoEvent_EDIT_SEGMENT(position, element, properties) {
            windows("editSegment", {
                target: element
            });
        },

        TopoEvent_EDIT_DEVICE_TYPE(position, element, properties) {
            windows("editDeviceType", {
                target: element
            });
        },

        TopoEvent_EDIT_DEVICE_ATTR(position, element, properties) {
            windows("editDeviceAttr", {
                target: element
            })
        },

        TopoEvent_ADD_SEGMENT(position, element, properties) {
            windows("addSegment", {
                position: position
            });
        },

        TopoEvent_ADD_DEVICE(position, element, properties) {
            windows("addDevice", {
                position: position
            });
        },
        TopoEvent_HILGHT_MANAGE(position, element, properties) {
            scene.data("high_light_manage", true);
            scene.map(el => {
                if (_.isNode(el) || _.isLink(el)) {
                    if (el.data("state") == 1) {
                        el.style({
                            alpha: 1,
                            textAlpha: 1,
                            alarmAlpha: 1
                        });
                    } else {
                        el.style({
                            alpha: 0.1,
                            textAlpha: 0.1,
                            alarmAlpha: 0.1
                        });
                    }
                }
            });
        },

        TopoEvent_HIGHTLIGHT_CONNECT(position, element, properties) {
            scene.data("high_light", true);
            scene.map(el => {
                if (_.isNode(el) || _.isLink(el)) {
                    el.style({
                        alpha: 0.1,
                        textAlpha: 0.1,
                        alarmAlpha: 0.1
                    });
                }
            });
            let lighting = new Set();
            lighting.add(element);
            element.$inLinks && element.$inLinks.forEach(il => {
                lighting.add(il);
                lighting.add(il.$path[0]);
            });
            element.$outLinks && element.$outLinks.forEach(ol => {
                lighting.add(ol);
                lighting.add(ol.$path[1]);
            });
            lighting.forEach(el => el.style({
                alpha: 1,
                textAlpha: 1,
                alarmAlpha: 1
            }));
        },

        TopoEvent_HIGHTLIGHT_CANCEL(position, element, properties) {
            scene.data("high_light", false);
            scene.data("high_light_manage", false);
            scene.map(el => {
                if (_.isNode(el) || _.isLink(el)) {
                    el.style({
                        alpha: 1,
                        textAlpha: 1,
                        alarmAlpha: 1
                    });
                }
            });
        },

        TopoEvent_DELETE_ELEMENTS(position, element, properties) {
            let selected = scene.$selected;
            iposs.confirm(`删除${selected.size}个对象?`).ok(() => {
                factory.remove([...selected].map(el => el.data("id"))).then(() => {
                    scene.remove(...selected);
                });
            });
        },

        TopoEvent_MANAGE(position, element, properties) {
            factory.manage(element.data("id")).then(e => {
                element.data('state', 1);
                let image = manageIcon(element.image(), 1);
                element.image(image);
                if (scene.data("high_light_manage")) {
                    element.style({
                        alpha: 1,
                        textAlpha: 1,
                        alarmAlpha: 1
                    });
                }
            });
        },

        TopoEvent_CANCEL_MANAGE(position, element, properties) {
            factory.cancelManage(element.data("id")).then(e => {
                element.data('state', 0);
                let image = manageIcon(element.image(), 0);
                element.image(image);
                if (scene.data("high_light_manage")) {
                    element.style({
                        alpha: .1,
                        textAlpha: .1,
                        alarmAlpha: .1
                    });
                }
            });
        },

        TopoEvent_COPY(position, element, properties) {
            let selected = scene.$selected;
            let ids = [...selected].filter(el => _.isNode(el)).map(el => el.data("id"));
            factory.copy(ids).then(json => {
                json = json.Nodes;
                iposs.addNode(json.Device);
                iposs.addLink(json.Link);
            });
        },

        TopoEvent_CUT(position, element, properties) {
            let selected = scene.$selected;
            let elements = [...selected].filter(el => _.isNode(el));
            elements.forEach(el => el.$style.visible = false);
            scene.data("cut_elements", elements);
        },

        TopoEvent_PASTE(position, element, properties) {
            let elements = scene.data("cut_elements");
            if (_.notNull(elements)) {
                if (scene.has(elements[0])) {
                    elements.forEach(el => el.$style.visible = true);
                    scene.data("cut_elements", null);
                } else {
                    factory.cut_paste(elements.map(el => el.data("id"))).then(() => {
                        scene.data("cut_elements", null);
                        elements.forEach(el => {
                            el.$style.visible = true;
                            el.$inLinks && el.$inLinks.clear();
                            el.$outLinks && el.$outLinks.clear();
                        });
                        scene.add(...elements);
                    });
                }
            }
        },

        TopoEvent_SET_AS_LINK_START(position, element, properties) {
            if (_.notNull(linkCache.to)) {
                let hasLink = false;
                element.$outLinks.forEach(link => {
                    if (link.$path[1] === linkCache.to) {
                        hasLink = true;
                    }
                });
                if (!hasLink) {
                    linkCache.from = element;
                    addLink();
                } else {
                    iposs.alert("已存在该方向链路!");
                }
            } else {
                linkCache.from = element;
            }

        },

        TopoEvent_SET_AS_LINK_END(position, element, properties) {
            if (_.notNull(linkCache.from)) {
                let hasLink = false;
                element.$inLinks.forEach(link => {
                    if (link.$path[0] === linkCache.from) {
                        hasLink = true;
                    }
                });
                if (!hasLink) {
                    linkCache.to = element;
                    addLink();
                } else {
                    iposs.alert("已存在该方向链路!");
                }
            } else {
                linkCache.to = element;
            }
        },

        TopoEvent_SET_MODE_SHOW(position, element, properties) {
            scene.mode(_.MODE_SHOW);
        },

        TopoEvent_SET_MODE_SELECT(position, element, properties) {
            scene.mode(_.MODE_SELECT);
        },

        TopoEvent_SET_MODE_EDIT(position, element, properties) {
            scene.mode(_.MODE_EDIT);
        },

        TopoEvent_SET_CENTER_ZOOM(position, element, properties) {
            scene.centerZoom();
        },

        TopoEvent_SET_CENTER(position, element, properties) {
            scene.center().zoom();
        },

        TopoEvent_GET_PICTURE(position, element, properties) {
            scene.$stage.getPicture();
        },

        TopoEvent_SAVE(position, element, properties) {
            factory.savePosition().then(factory.save).then(data => iposs.alert(data));
        },

        TopoEvent_OPEN_SEARCH(position, element, properties) {
            iposs.search();
        },

        TopoEvent_GROUP_EXPANDED_TOGGLE: function (position, element, properties) {
            if (_.isGroup(element) && _.isFunction(element.toggle)) {
                element.toggle();
            }
        },

        TopoEvent_LINK_EXPANDED_TOGGLE: function (position, element, properties) {
            if (_.isLink(element) && _.isFunction(element.toggle)) {
                element.toggle();
            }
        }

    };

    function errorPath(e) {
        path.return();
        console.info(e);
        iposs.progress(100, "未知错误,请联系管理员!", true);
        iposs.alert("未知错误,请联系管理员!");
    }
    function addLink() {
        iposs.confirm(`创建从
            <span style="color:yellow;">${linkCache.from.$data.title}</span>
            到<span style="color:yellow;">${linkCache.to.$data.title}</span>的链路?`)
            .ok(() => {
                linkCache.from = linkCache.from.data("id");
                linkCache.to = linkCache.to.data("id");
                factory.addLink(linkCache.from, linkCache.to).then(() => {
                    linkCache.id = linkCache.from + "" + linkCache.to + "1/0";
                    iposs.addLink(linkCache);
                }).finally(e => linkCache = {});
            })
            .cancel(() => linkCache = {});
    }

};
//---------

function manageIcon(img, state) {
    if (img.indexOf("router2") > -1 || img.indexOf("network_cloud2") > -1) {
        return state == 1 ? img.replace("_glory.png", ".png") : img.replace(".png", "_glory.png");
    } else {
        return img;
    }
}

