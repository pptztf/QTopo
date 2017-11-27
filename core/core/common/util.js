const unknowPic = require('./unknow.png'),
    inBrowser = typeof window !== 'undefined',
    UA = inBrowser && window.navigator.userAgent.toLowerCase(),
    isIE = UA && /msie|trident/.test(UA),
    isIE9 = UA && UA.indexOf('msie 9.0') > 0,
    isEdge = UA && UA.indexOf('edge/') > 0,
    isAndroid = UA && UA.indexOf('android') > 0,
    isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge,
    isIOS = UA && /iphone|ipad|ipod|ios|safari/.test(UA) && !isChrome,
    isFirefox = navigator.userAgent.indexOf("Firefox") > 0,
    classType = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Object]': 'object',
        '[object Error]': 'error'
    },
    $canvas = document.createElement("canvas"),
    $context = $canvas.getContext("2d"),
    imageCache = (function () {
        const IMAGES = new Map();
        return function (src) {
            return new Promise((resolve, reject) => {
                if (IMAGES.has(src)) {
                    resolve(IMAGES.get(src));
                } else {
                    const image = new Image();
                    image.src = src;
                    image.onload = function () {
                        IMAGES.set(src, image);
                        resolve(image);
                    };
                    image.onerror = function () {
                        image.src = unknowPic;
                        resolve(image);
                    }
                }
            });
        }
    })(),
    colorImageCache = (function () {
        const IMAGES = new Map();
        return function (imageObject, color) {
            const index = imageObject.src + ":" + color;
            if (!IMAGES.has(index)) {
                let newImage = new Image;
                newImage.src = changeImageColor(imageObject, color);
                IMAGES.set(index, newImage);
            }
            return IMAGES.get(index);
        }
    })(),
    transColor = cached(function (color) {
        if (color && color.length == 7 && color.charAt(0) == '#') {
            return [
                parseInt(color.substr(1, 2), 16),
                parseInt(color.substr(3, 2), 16),
                parseInt(color.substr(5, 2), 16)
            ].join(',');
        } else {
            return color;
        }
    }),
    _data = new Map();

if (isIE) {
    Object.create = function (obj) {
        empty.prototype = obj;
        return new empty();
        function empty() {
        }
    }
}
export const _ = {
    MODE_SHOW: 'show',
    MODE_SELECT: 'select',
    MODE_EDIT: 'edit',
    MODE_LINKEDIT: 'linkEdit',
    type,
    inBrowser,
    isIE,
    isIE9,
    isEdge,
    isAndroid,
    isIOS,
    isChrome,
    isFirefox,
    isFunction,
    isString,
    isNumeric,
    isArray,
    isObject,
    isEqual,
    notEmptyObject,
    notNull,
    cached,
    judge,
    imageCache,
    colorImageCache,
    each,
    reduce,
    clone,
    cloneEvent,
    extend,
    randomColor,
    transColor,
    dateFormat,
    makeId,
    parseXml,
    toJson,
    upFirst,
    offset,
    percent,
    mix,
    addUrlHash,
    arraryDelete,
    filter,
    _canvas,
    _context,
    _breath
};
function filter(arr, fn) {
    const result = [];
    if (arr && arr.forEach && isFunction(fn)) {
        arr.forEach((v, i) => {
            if (fn(v, i) == 1) {
                result.push(v);
            }
        })
    }
    return result;
}
function cached(fn) {
    const cache = new Map();
    return function (str) {
        if (!cache.has(str)) {
            cache.set(str, fn(str));
        }
        return cache.get(str);
    };
}
function judge(judge, ...arr) {
    if (arr.length > 1) {
        return arr.every(function (obj) {
            return judge(obj);
        });
    }
    return judge(arr[0]);
}
function changeImageColor(image, color) {

    const [R, G, B] = color.split(",").map((c) => parseInt(c)),
        canvas = _canvas(),
        context = _context(),
        imageWidth = canvas.width = image.width,
        imageHeight = canvas.height = image.height;
    context.drawImage(image, 0, 0);
    const ImageData = context.getImageData(0, 0, image.width, image.height),
        data = ImageData.data;
    for (let i = 0; imageWidth > i; i++) {
        for (let j = 0; imageHeight > j; j++) {
            let n = 4 * (i + j * imageWidth);
            if (0 != data[n + 3]) {
                if (null != R) {
                    data[n + 0] += R;
                }
                if (null != G) {
                    data[n + 1] += G;
                }
                if (null != B) {
                    data[n + 2] += B;
                }
            }
        }
    }
    context.putImageData(ImageData, 0, 0, 0, 0, image.width, image.height);
    return canvas.toDataURL();
}
function each(ob, fn) {
    if (notEmptyObject(ob)) {
        for (let [key, value] of Object.entries(ob)) {
            fn(value, key);
        }
    }
}
function reduce(ob, fn, first) {
    if (isArray(ob)) {
        return ob.reduce(fn, first);
    }
    if (notEmptyObject(ob)) {
        const names = Object.getOwnPropertyNames(ob);
        if (!notNull(first)) {
            first = '';
        }
        for (let i = 0; i < names.length; i++) {
            first += fn(ob[names[i]], names[i], ob);
        }
        return first;
    }
}
function clone(obj = {}, flag) {
    if (flag) {
        return deepClone(obj);
    } else {
        return Object.create(
            Object.getPrototypeOf(obj),
            Object.getOwnPropertyDescriptors(obj)
        )
    }
    function deepClone(obj) {
        let result;
        //确定result的类型
        if (isObject(obj)) {
            result = {};
        } else if (isArray(obj)) {
            result = [];
        } else {
            return obj;
        }
        for (let [name, value] of obj.entries) {
            if (notEmptyObject(value) || isArray(value)) {
                result[name] = deepClone(value);
            } else {
                result[name] = value;
            }
        }
        return result;
    }
}
function cloneEvent(event) {
    const e = { event };
    [
        "x", "y", "pageX", "pageY", "offsetX", "offsetY", "clientX", "clientY", "screenX", "screenY",
        "ctrlKey", "altKey", "detail", "shiftKey", "keyCode", "button", "target",
        "dragWidth", "dragHeight"
    ].forEach(name => {
        if (event[name] != null) {
            e[name] = event[name];
        }
    });
    return e;
}
function extend(base, ...arr) {
    arr.forEach(config => {
        for (var key in config) {
            if (config.hasOwnProperty(key)) {
                base[key] = config[key];
            }
        }
    });
    return base;
}
function type(obj) {
    if (obj === null) {
        return obj + "";
    }
    if (typeof obj === "object" || typeof obj === "function") {
        return classType[Object.prototype.toString.call(obj)] || "object";
    } else {
        return typeof obj;
    }
}
function isFunction(obj) {
    return type(obj) === 'function';
}
function isString(obj) {
    return type(obj) === 'string';
}
function isNumeric(obj) {
    return type(obj) === 'number' || (type(obj) === 'string' && /^([0-9]*\.?[0-9]+)$/.test(obj));
}
function isArray(obj) {
    return type(obj) === 'array';
}
function isObject(obj) {
    return type(obj) === 'object';
}
function isEqual(a, b) {
    let isObjectA = _.isObject(a);
    let isObjectB = _.isObject(b);
    if (isObjectA && isObjectB) {
        return JSON.stringify(a) === JSON.stringify(b);
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    } else {
        return false
    }
}
function notEmptyObject(obj) {
    if (type(obj) === 'object') {
        for (let t in obj) {
            return true;
        }
    }
    return false;
}
function notNull(obj) {
    return type(obj) !== 'null' && type(obj) !== 'undefined' && obj !== '';
}
function randomColor() {
    return Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random());
}
function dateFormat(date, ftString) {
    if (date instanceof Date) {
        var fomat = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(ftString)) {
            ftString = ftString.replace(RegExp.$1, (date.getFullYear() + "")
                .substr(4 - RegExp.$1.length));
        }
        for (var type in fomat) {
            if (new RegExp("(" + type + ")").test(ftString)) {
                var temp;
                if (RegExp.$1.length == 1) {
                    temp = fomat[type];
                } else {
                    temp = ("00" + fomat[type]).substr(("" + fomat[type]).length);
                }
                ftString = ftString.replace(RegExp.$1, temp);
            }
        }
    }
    return ftString;
}
function makeId() {
    return _S4() + "-" + _S4() + "-" + _S4() + "-" + _S4();
}
function _S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function parseXml(xml, option) {
    option = option || { attr: "", text: "text" };
    let tab = '';
    const attrTag = typeof option.attr == 'undefined' ? "@" : option.attr;
    const textTag = typeof option.text == 'undefined' ? "#text" : option.text;
    const dataTag = typeof option.data == 'undefined' ? "#cdata" : option.data;
    let X = {
        toObj: function (xml) {
            let o = {};
            if (xml.nodeType == 1) {   // element node ..
                if (xml.attributes.length)   // element with attributes  ..
                    for (let i = 0; i < xml.attributes.length; i++)
                        o[attrTag + xml.attributes[i].nodeName] = (xml.attributes[i].nodeValue || "").toString();
                if (xml.firstChild) { // element has child nodes ..
                    let textChild = 0, cdataChild = 0, hasElementChild = false;
                    for (let n = xml.firstChild; n; n = n.nextSibling) {
                        if (n.nodeType == 1) hasElementChild = true;
                        else if (n.nodeType == 3 && n.nodeValue.match(/[^ \f\n\r\t\v]/)) textChild++; // non-whitespace text
                        else if (n.nodeType == 4) cdataChild++; // cdata section node
                    }
                    if (hasElementChild) {
                        if (textChild < 2 && cdataChild < 2) { // structured element with evtl. a single text or/and cdata node ..
                            X.removeWhite(xml);
                            for (let n = xml.firstChild; n; n = n.nextSibling) {
                                if (n.nodeType == 3)  // text node
                                    o[textTag] = X.escape(n.nodeValue);
                                else if (n.nodeType == 4)  // cdata node
                                    o[dataTag] = X.escape(n.nodeValue);
                                else if (o[n.nodeName]) {  // multiple occurence of element ..
                                    if (o[n.nodeName] instanceof Array)
                                        o[n.nodeName][o[n.nodeName].length] = X.toObj(n);
                                    else
                                        o[n.nodeName] = [o[n.nodeName], X.toObj(n)];
                                }
                                else  // first occurence of element..
                                    o[n.nodeName] = X.toObj(n);
                            }
                        }
                        else { // mixed content
                            if (!xml.attributes.length)
                                o = X.escape(X.innerXml(xml));
                            else
                                o[textTag] = X.escape(X.innerXml(xml));
                        }
                    }
                    else if (textChild) { // pure text
                        if (!xml.attributes.length)
                            o = X.escape(X.innerXml(xml));
                        else
                            o[textTag] = X.escape(X.innerXml(xml));
                    }
                    else if (cdataChild) { // cdata
                        if (cdataChild > 1)
                            o = X.escape(X.innerXml(xml));
                        else
                            for (let n = xml.firstChild; n; n = n.nextSibling)
                                o[dataTag] = X.escape(n.nodeValue);
                    }
                }
                if (!xml.attributes.length && !xml.firstChild) o = null;
            }
            else if (xml.nodeType == 9) { // document.node
                o = X.toObj(xml.documentElement);
            }
            return o;
        },
        toJson: function (o, name, ind) {
            let json = name ? ("\"" + name + "\"") : "";
            if (o instanceof Array) {
                for (let i = 0, n = o.length; i < n; i++)
                    o[i] = X.toJson(o[i], "", ind + "\t");
                json += (name ? ":[" : "[") + (o.length > 1 ? ("\n" + ind + "\t" + o.join(",\n" + ind + "\t") + "\n" + ind) : o.join("")) + "]";
            }
            else if (o == null)
                json += (name && ":") + "null";
            else if (typeof (o) == "object") {
                let arr = [];
                for (let m in o)
                    arr[arr.length] = X.toJson(o[m], m, ind + "\t");
                json += (name ? ":{" : "{") + (arr.length > 1 ? ("\n" + ind + "\t" + arr.join(",\n" + ind + "\t") + "\n" + ind) : arr.join("")) + "}";
            }
            else if (typeof (o) == "string")
                json += (name && ":") + "\"" + o.toString() + "\"";
            else
                json += (name && ":") + o.toString();
            return json;
        },
        innerXml: function (node) {
            let s = ""
            if ("innerHTML" in node)
                s = node.innerHTML;
            else {
                let asXml = function (n) {
                    let s = "";
                    if (n.nodeType == 1) {
                        s += "<" + n.nodeName;
                        for (let i = 0; i < n.attributes.length; i++)
                            s += " " + n.attributes[i].nodeName + "=\"" + (n.attributes[i].nodeValue || "").toString() + "\"";
                        if (n.firstChild) {
                            s += ">";
                            for (let c = n.firstChild; c; c = c.nextSibling)
                                s += asXml(c);
                            s += "</" + n.nodeName + ">";
                        }
                        else
                            s += "/>";
                    }
                    else if (n.nodeType == 3)
                        s += n.nodeValue;
                    else if (n.nodeType == 4)
                        s += "<![CDATA[" + n.nodeValue + "]]>";
                    return s;
                };
                for (let c = node.firstChild; c; c = c.nextSibling)
                    s += asXml(c);
            }
            return s;
        },
        escape: function (txt) {
            return txt.replace(/[\\]/g, "\\\\")
                .replace(/[\"]/g, '\\"')
                .replace(/[\n]/g, '\\n')
                .replace(/[\r]/g, '\\r');
        },
        removeWhite: function (e) {
            e.normalize();
            for (let n = e.firstChild; n;) {
                if (n.nodeType == 3) {  // text node
                    if (!n.nodeValue.match(/[^ \f\n\r\t\v]/)) { // pure whitespace text node
                        let nxt = n.nextSibling;
                        e.removeChild(n);
                        n = nxt;
                    }
                    else
                        n = n.nextSibling;
                }
                else if (n.nodeType == 1) {  // element node
                    X.removeWhite(n);
                    n = n.nextSibling;
                }
                else                      // any other node
                    n = n.nextSibling;
            }
            return e;
        }
    };
    if (xml.nodeType == 9) // document node
        xml = xml.documentElement;
    let noWhite = X.removeWhite(xml);
    let Object = X.toObj(noWhite);
    let json = X.toJson(Object, xml.nodeName, "\t");
    return "{\n" + tab + (tab ? json.replace(/\t/g, tab) : json.replace(/\t|\n/g, "")) + "\n}";
}
function toJson(data) {
    if (isString(data)) {
        return JSON.parse(data);
    } else if (isObject(data) && data.nodeType) {
        return JSON.parse(parseXml(data));
    }
    return data;
}
function upFirst(str) {
    return str.toLowerCase().replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
}
function percent(str) {
    if (_.isString(str)) {
        let index = str.indexOf("%");
        if (index > -1) {
            str = Number(str.substring(0, index)) / 100;
        } else {
            str = 0;
        }
    }
    return str;
}
function offset(str, length) {
    if (_.isNumeric(str)) {
        return Number(str);
    }
    return percent(str) * length;
}
function _canvas() {
    return $canvas;
}
function _context() {
    $context.clearRect(0, 0, $canvas.width, $canvas.height);
    return $context;
}
function* _breath(step = 2) {
    let [shadowBlur, shadowDirection] = [0, true];
    while (true) {
        if (shadowDirection) {
            shadowBlur += step;
            if (shadowBlur >= 100) {
                shadowDirection = false;
            }
        } else {
            shadowBlur -= step;
            if (shadowBlur <= 0) {
                shadowDirection = true;
            }
        }
        yield shadowBlur;
    }
}
function mix(...mixins) {
    class Mix { }

    for (let mixin of mixins) {
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }

    return Mix;
}
function addUrlHash(option, key = "_hash") {
    if (isString(option)) {
        option = _hashUrl(option, key);
    } else if (isObject(option) && isString(option.url)) {
        option.url = _hashUrl(option.url, key);
    }
    return option;
}

function _hashUrl(url, key) {
    if (url.indexOf("?") > -1) {
        return url + "&" + key + "=" + makeId();
    } else {
        return url + "?" + key + "=" + makeId();
    }

}

function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== "constructor"
            && key !== "prototype"
            && key !== "name"
        ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

function arraryDelete(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) {
        arr.splice(index, 1);
    }
}

Object.assign(_, {
    $ready(fn) {
        if (isFunction(fn)) {
            if (document.readyState === 'complete' || document.readyState !== 'loading') {
                fn();
            } else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        }
    },

    $createDom(str) {
        let a = document.createElement('div');
        a.innerHTML = str.trim();
        return a.firstElementChild;
    },

    $show(dom, dis = 'block') {
        dom.style.display = dis;
        return dom;
    },

    $hide(dom) {
        dom.style.display = "none";
        return dom;
    },

    $height(dom) {
        if (!dom.getBoundingClientRect) {
            const styles = window.getComputedStyle(dom),
                height = dom.offsetHeight,
                borderTopWidth = parseFloat(styles.borderTopWidth),
                borderBottomWidth = parseFloat(styles.borderBottomWidth),
                paddingTop = parseFloat(styles.paddingTop),
                paddingBottom = parseFloat(styles.paddingBottom);
            return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
        }
        return dom.getBoundingClientRect().height;
    },

    $width(dom) {
        if (!dom.getBoundingClientRect) {
            const styles = window.getComputedStyle(dom),
                width = dom.offsetWidth,
                borderLeftWidth = parseFloat(styles.borderLeftWidth),
                borderRightWidth = parseFloat(styles.borderRightWidth),
                paddingLeft = parseFloat(styles.paddingLeft),
                paddingRight = parseFloat(styles.paddingRight);
            return width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight;
        }
        return dom.getBoundingClientRect().width;
    },

    $on(dom, eventName, fn) {
        if (isFunction(fn)) {
            eventName = eventName.split(' ');
            if (!window.addEventListener) {
                eventName.forEach(event => dom.attachEvent("on" + event.toLowerCase(), fn));
            } else {
                eventName.forEach(event => dom.addEventListener(event.toLowerCase(), fn));
            }
        }
    },

    $off(dom, eventName, fn) {
        if (isFunction(fn)) {
            eventName = eventName.split(' ');
            if (!window.addEventListener) {
                eventName.forEach(event => dom.detachEvent("on" + event.toLowerCase(), fn));
            } else {
                eventName.forEach(event => dom.removeEventListener(event.toLowerCase(), fn));
            }
        }
    },

    $closest(dom, selector) {
        if (!dom.closest) {
            const matchesSelector = dom.matches || dom.webkitMatchesSelector || dom.mozMatchesSelector || dom.msMatchesSelector;
            while (dom) {
                if (matchesSelector.call(dom, selector)) {
                    return dom;
                } else {
                    dom = dom.parentElement;
                }
            }
            return null;
        } else {
            return dom.closest(selector);
        }
    }
});
