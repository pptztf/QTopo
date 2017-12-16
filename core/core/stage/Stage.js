import { EventCtrl, Animate, _ } from "../common";
import { bindCanvas } from "./canvasEvent";
import { Scene } from "../scene/Scene";
import { Dynamic } from "./Dynamic";

const BREATH = _._breath();
class Stage extends EventCtrl {
    constructor(dom) {
        super();
        const { $static, $dynamic, $fps, stopResize } = initDom(dom, this);
        if (!$static || !_.isFunction($static.getContext)) {
            throw new Error("can't create canvas, you may need use IE 9+ or chrome;");
        }
        const context = $static.getContext("2d");
        Object.assign(this, {
            $dom: dom,
            $context: context,
            $canvas: $static,
            $dynamic: new Dynamic($dynamic),
            $background: {
                src: "",
                color: ""
            },
            $breath: 0,
            $mouseDownPoint: [0, 0],
            $mouseDown: false,
            $scenes: new Set(),
            $state: {
                showFps: false,
                repaint: true,
                continue: false
            },
            $current: null,
            $loop: new Animate(() => this.$paint(context, $fps))
        });
        this._off = bindCanvas(this, this.$dynamic.$canvas);
        this._stopResize = stopResize;
        this.$loop.start();

    }

    destroy() {
        this._off();
        this._stopResize();
        this.$loop.stop();
        this.$dynamic.clear();
        this.clear();
        this.$dom.innerHTML = '';
        this.$dom = this.$context = this.$canvas = this.$dynamic = this.$background = this.$breath = this.useDownPoint = this.$scenes = this.$state = this.$loop = this.$current = null;
        return this;
    }

    add() {
        let scene = new Scene(this);
        this.$scenes.add(scene);
        this.repaint();
        return scene;
    };

    remove(scene) {
        this.$scenes.delete(scene);
        this.repaint();
        return this;
    }

    clear() {
        this.$scenes.clear();
        this.repaint();
        return this;
    }

    background(str) {
        if (_.notNull(str)) {
            let extStart = str.lastIndexOf(".");
            if (extStart > -1) {
                let ext = str.substring(extStart, str.length).toUpperCase();
                if (ext != ".BMP" || ext != ".PNG" || ext != ".GIF" || ext != ".JPG" || ext != ".JPEG") {
                    _.imageCache(str).then(data => {
                        Object.assign(this.$background, {
                            src: str,
                            data: data
                        });
                        Object.assign(this.$dom.style, {
                            'background-image': "url(" + str + ")",
                            'background-repeat': "no-repeat",
                            'background-size': "cover"
                        });
                    });
                }
            } else {
                Object.assign(this.$background, {
                    color: str,
                    src: null,
                    data: null
                });
                this.$dom.style['background-color'] = str;
            }
            return this;
        } else {
            if (_.notNull(this.$background.src)) {
                return this.$background.src
            } else {
                return this.$background.color;
            }
        }
    }

    zoom(scale) {
        this.$scenes.forEach(scene => scene.zoom(scale));
    }

    size() {
        return [this.$canvas.width, this.$canvas.height];
    }

    resize() {
        this.$canvas.$resize();
    }

    getPicture(type, hasDynamic) {
        const canvas = _._canvas(),
            context = _._context();
        canvas.width = this.$canvas.width;
        canvas.height = this.$canvas.height;
        if (_.notNull(this.$background.src)) {
            context.drawImage(
                this.$background.data,
                0, 0,
                this.$canvas.width,
                this.$canvas.height
            );
        }
        else {
            context.fillStyle = this.$background.color;
            context.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
        }
        context.drawImage(this.$canvas, 0, 0);
        if (hasDynamic) {
            context.drawImage(this.$dynamic.$canvas, 0, 0);
        }
        window.open().document.write("<img src='" + canvas.toDataURL(type) + "' alt='from QTopo'/>");
    };

    repaint() {
        this.$state.repaint = true;
    }

    triggerScenes(name, data) {
        this.$scenes.forEach(scene => {
            if (scene.$style.visible) {
                scene.eventHandler(name, data);
            }
        })
    }

    $paint(context, $fps) {
        this.$paintFps($fps)
            .$paintStatic(context)
            .$dynamic.$paint();
        //dynamicValues
        this.$breath = BREATH.next().value;
        return this;
    };

    $paintStatic(context) {
        if (this.$state.repaint || this.$state.$continue) {
            context.clearRect(0, 0, ...this.size());
            context.save();
            this.$scenes.forEach(scene => scene.$style.visible && scene.$paint(context));
            context.restore();
            this.$state.repaint = false;
        }
        return this;
    }

    $paintFps($fps) {
        if (this.$state.showFps) {
            $fps();
        }
        return this;
    }

}
_.isStage = obj => obj instanceof Stage;
export { Stage }
//------------
function initDom(dom, stage) {
    const $static = createCanvas(dom),
        $dynamic = createCanvas(dom),
        $fps = createFps(dom);
    dom.style.position = 'relative';
    dom.style.overflow = 'hidden';
    dom.appendChild($static);
    dom.appendChild($dynamic);
    if (_.isIE || !window.addEventListener) {
        window.onresize = resize;
    } else {
        window.addEventListener("resize", resize);
    }
    return {
        $static,
        $dynamic,
        $fps,
        stopResize() {
            if (_.isIE || !window.addEventListener) {
                window.onresize = null;
            } else {
                window.removeEventListener("resize", resize);
            }
        }
    };

    function resize() {
        $static.$resize();
        $dynamic.$resize();
        stage.repaint();
    }
}
function createCanvas(dom) {
    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, {
        background: 'none',
        'background-color': 'none',
        position: "absolute",
        top: 0,
        left: 0,
        'user-select': 'none',
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
    });
    canvas.$resize = () => {
        canvas.setAttribute('width', dom.offsetWidth);
        canvas.setAttribute('height', dom.offsetHeight);
    };
    canvas.$resize();
    return canvas;
}
function createFps(dom) {
    const fpsSpan = document.createElement('span');
    Object.assign(fpsSpan.style, {
        background: 'none',
        'background-color': 'none',
        position: "absolute",
        top: 0,
        left: 0,
        color: '#ffffff',
        'font-size': '16px',
        'user-select': 'none',
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
    });
    dom.appendChild(fpsSpan);
    let fps = 0, offset, last = Date.now();
    return function (flag) {
        if (!flag) {
            offset = Date.now() - last;
            fps += 1;
            if (offset >= 1000) {
                last += offset;
                fpsSpan.innerHTML = fps;
                fps = 0;
            }
        } else {
            fpsSpan.innerHTML = '';
        }
    }
}