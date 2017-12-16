import { _ } from "../common";
import { SceneTools } from "./SceneTools";
class Scene extends SceneTools {
    constructor(stage) {
        super();
        Object.assign(this, {
            $stage: stage,
            $style: {
                scale: 1,
                translate: [0, 0],
                mode: _.MODE_EDIT,
                visible: true,
                zoomPadding: 0
            },
            $mouseDown: null,
            $mouseOver: null,
            $current: null,
            $selected: new Set(),
            $children: {
                map: new Map(),
                index: [],
                indexMap: {}
            },
            _areaSelect: null,
            _lastTranslate: [0, 0]
        });
        Object.assign(this.$state, {
            mouseDown: false,
            draggable: true,
            dragging: false
        });
    }

    eventHandler(name, event) {
        event = toSceneEvent(this, event);
        switch (name) {
            case "mousedown":
                mouseDown(this, event);
                break;
            case "mouseup":
                mouseUp(this, event);
                break;
            case "mousedrag":
                mouseDrag(this, event);
                break;
            case "mousemove":
                mouseMove(this, event);
                break;
            case "click":
                click(this, event);
                break;
            case "dblclick":
                dblClick(this, event);
                break;
        }
        this.repaint();
        return this.trigger(name, event);
    }

    $paint(context) {
        const origin = this.getTranslate(), { map, index } = this.$children;
        this.$style.mode === _.MODE_SELECT && _.notNull(this._areaSelect) && this._areaSelect(context);
        context.save();
        context.scale(this.$style.scale, this.$style.scale);
        context.translate(...origin);
        index.forEach(zIndex => {
            map.get(zIndex).forEach(element => {
                if (this.paintAble(element)) {
                    context.save();
                    element.$paint(context);
                    context.restore();
                }
            });
        });
        context.restore();
        return this;
    };

}
_.isScene = obj => obj instanceof Scene;
export { Scene }
//------------------事件处理
function mouseDown(scene, event) {
    scene.$mouseDown = event;
    switch (scene.$style.mode) {
        case _.MODE_SHOW:
            scene._lastTranslate = [...scene.$style.translate];
            break;
        case _.MODE_SELECT:
            selectElement(scene, event);
            break;
        default:
            selectElement(scene, event);
            scene._lastTranslate = [...scene.$style.translate];
    }
}
function mouseUp(scene, event) {
    scene._areaSelect = null;
    let currentElement = scene.$current;
    if (_.notNull(currentElement)) {
        event.target = currentElement;
        currentElement.eventHandler("mouseup", event);
    }
}
function dragScene(scene, event) {
    if (scene.$state.draggable) {
        scene.$style.translate[0] = scene._lastTranslate[0] + event.dragWidth;
        scene.$style.translate[1] = scene._lastTranslate[1] + event.dragHeight;
    }
}
function mouseDrag(scene, event) {
    switch (scene.$style.mode) {
        case _.MODE_SHOW:
            dragScene(scene, event);
            break;
        case _.MODE_SELECT:
            if (_.notNull(scene.$current)) {
                if (scene.$current.$state.draggable) {
                    dragElements(scene, event)
                }
            } else {
                addAreaSelect(scene, event);
            }
            break;
        default:
            if (_.notNull(scene.$current) && scene.$current.$state.draggable) {
                dragElements(scene, event)
            } else {
                dragScene(scene, event);
            }
    }
}
function mouseMove(scene, event) {
    if (scene.$style.mode === _.MODE_SHOW) {
        return;
    }
    const mouseOverElement = scene.$mouseOver,
        currentElement = scene.searchPoint([event.x, event.y]);
    if (_.notNull(currentElement)) {
        if (_.notNull(mouseOverElement)
            && mouseOverElement !== currentElement) {
            mouseOverElement.eventHandler("mouseout", event);
        }
        scene.$mouseOver = currentElement;
        event.target = currentElement;
        if (currentElement.$state.mouseOver) {
            currentElement.eventHandler("mousemove", event);
        } else {
            currentElement.eventHandler("mouseover", event);
        }
    } else {
        if (_.notNull(mouseOverElement)) {
            event.target = mouseOverElement;
            mouseOverElement.eventHandler("mouseout", event);
            scene.$mouseOver = null;
        } else {
            event.target = null;
        }
    }
}
function click(scene, event) {
    if (_.notNull(scene.$current)) {
        event.target = scene.$current;
        scene.$current.eventHandler("click", event);
    }
}
function dblClick(scene, event) {
    if (_.notNull(scene.$current)) {
        event.target = scene.$current;
        scene.$current.eventHandler("dblclick", event);
    }
}
//-----------------工具
function toSceneEvent(scene, event) {
    const scale = scene.$style.scale,
        [translateX, translateY] = scene.getTranslate();
    const newEvent = _.cloneEvent(event);
    Object.assign(newEvent, {
        x: (event.x / scale) - translateX,
        y: (event.y / scale) - translateY,
        dragWidth: event.dragWidth / scale,
        dragHeight: event.dragHeight / scale,
        target: scene.$current,
        scene
    });
    return newEvent
}
function addAreaSelect(scene, event) {
    let { map, indexMap } = scene.$children,
        mouseDownEvent = scene.$mouseDown,
        scale = scene.$style.scale,
        selected = scene.$selected,
        [dragX, dragY] = [event.offsetX, event.offsetY],
        [downX, downY] = [mouseDownEvent.offsetX, mouseDownEvent.offsetY],
        [beginX, beginY] = [dragX >= downX ? downX : dragX, dragY >= downY ? downY : dragY],
        [width, height] = [Math.abs(event.dragWidth) * scale, Math.abs(event.dragHeight) * scale];
    scene._areaSelect = (function (x, y, w, h) {
        return function (context) {
            context.beginPath();
            context.strokeStyle = "rgba(168,202,255, 0.5)";
            context.fillStyle = "rgba(168,202,255, 0.1)";
            context.rect(x, y, w, h);
            context.fill();
            context.stroke();
        }
    })(beginX, beginY, width, height);
    if (_.notNull(indexMap.node)) {
        [dragX, dragY] = [event.x, event.y];
        [downX, downY] = [mouseDownEvent.x, mouseDownEvent.y];
        [beginX, beginY] = [dragX >= downX ? downX : dragX, dragY >= downY ? downY : dragY];
        [width, height] = [Math.abs(event.dragWidth), Math.abs(event.dragHeight)];
        let [endX, endY] = [beginX + width, beginY + height];
        let [x, y, elWidth, elHieght] = [];
        indexMap.node.forEach((zIndex) => {
            map.get(zIndex).forEach((element) => {
                if (scene.paintAble(element)) {
                    [x, y] = element.$position;
                    [elWidth, elHieght] = element.$style.size;
                    if (x > beginX && x + elWidth < endX && y > beginY && y + elHieght < endY) {
                        if (!selected.has(element)) {
                            element.eventHandler("selected", event);
                            selected.add(element);
                        }
                    }
                }
            });
        });
    }
}
function dragElements(scene, event) {
    scene.$selected.forEach(element => {
        if (element.$state.draggable) {
            const elEvent = _.cloneEvent(event);
            elEvent.target = element;
            element.eventHandler("mousedrag", elEvent);
        }
    });
}
function selectElement(scene, event) {
    const element = scene.searchPoint([event.x, event.y]),
        selected = scene.$selected;
    if (_.notNull(element)) {
        event.target = element;
        element.eventHandler("mousedown", event);
        if (selected.has(element)) {
            if (event.ctrlKey) {
                element.eventHandler("unselected", event);
                selected.delete(element);
            }
            selected.forEach(el => el.eventHandler("selected", event));
        } else {
            if (!event.ctrlKey) {
                selected.forEach(element => element.eventHandler("unselected", event));
                selected.clear();
            }
            selected.add(element);
            element.eventHandler("selected", event);
        }
        if (_.isBox(element)) {
            const set = scene.$children.map.get(element.$style.zIndex);
            if (set) {
                set.delete(element);
                set.add(element);//点击置顶
            }
        }
    } else if (!event.ctrlKey) {
        selected.forEach(element => element.eventHandler("unselected", event));
        selected.clear();
    }
    scene.$current = element;
    scene.$stage.$current = element;
}
