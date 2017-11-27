import { parseMacro } from "./parse";
import { _ } from "../core/common";
const EVENTS = new Map();
const EVENT_TYPE = "EventType";
const EVENT_PROPERTY = "EventProperty";

export const doAction = function (menu, scene, position, element) {
    element = element || scene;
    console.debug("触发菜单事件 %o ON %o", menu, element);
    switch (menu.type) {
        case "url":
            let url = parseMacro(menu.action, element, scene, menu.name).replace(/\$/g, "&");
            window.open(_.addUrlHash(url,"refresh"));
            break;
        case "event":
            parseAction(menu, scene, position, element);
            break;
        default:
            console.warn("菜单[{0}]未知操作类型: {1}", menu.name, menu.type);
            break;
    }
    QTopo._Warning.clear();
};

export const addEvents = function (ob) {
    _.each(ob, (handler, name) => {
        if (_.isFunction(handler)) {
            EVENTS.set(name, handler);
        }
    });
};

function parseAction(menu, scene, position, element) {
    if (_.notNull(menu.action)) {
        const eventType = getActionValue(EVENT_TYPE, menu.action);
        if (_.notNull(eventType)) {
            let propertiesStr = getActionValue(EVENT_PROPERTY, menu.action);
            propertiesStr = parseMacro(propertiesStr, element, scene, menu.name);
            const properties = parseValue(propertiesStr),
                handler = EVENTS.get(eventType);
            handler && handler(position, element, properties);
            scene.repaint();
        }
    }
}

function getActionValue(key, action) {
    const split = key + "(",
        start = action.indexOf(split);
    if (start == -1) {
        return "";
    }
    const end = action.indexOf(")", start);
    return action.substring(start + split.length, end);
}


function parseValue(str) {
    const values = {};
    if (_.notNull(str)) {
        str.split(", ").forEach(ss => {
            const splitStrIndex = ss.indexOf("=");
            if (splitStrIndex != -1) {
                values[ss.substring(0, splitStrIndex).trim()] = ss.substring(splitStrIndex + 1).trim();
            }
        });
    }
    return values;
}