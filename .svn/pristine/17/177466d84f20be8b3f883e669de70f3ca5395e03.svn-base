let [_ ,DEFAULT_SIZE,IMAGE_Path,ALARM_COLOR] = [QTopo.util, 36, "./images/demo/", ["255,0,0", "255, 102, 0", "255,204,0", "0,0,255"]];
let parseScene = json => {
    let scene = _parseP(json.p);
    ({
        id: scene.id,
        name: scene.name,
        pid: scene.pid,
        type: scene.type
    } = json);
    scene.offset = [parseInt(json.XY.iMinX) || 0, parseInt(json.XY.iMinY) || 0];
    return scene;
};

let parseNode = _check((json, offset)=> {
    let [x,y,width,height]=[Number(json.x), Number(json.y), DEFAULT_SIZE, DEFAULT_SIZE];
    return {
        type:"ImageNode",
        api: {
            position: [x  + offset[0], y + offset[1]],
            id: json.id,
            image: IMAGE_Path + json.icon
        },
        style: {
            textValue: _filterName(json.name),
            size: [width, height],
            visible: Number(json.visible) == 1
        },
        data: _filterValue(_parseP(json.p), ["x", "y", "p", "icon"], json)
    };
});
let parseObject = _check((json, offset)=> {
    let [x,y,width,height]=[Number(json.x), Number(json.y), Number(json.width), Number(json.height)];
    return {
        type:"ImageNode",
        api: {
            position: [x + offset[0], y + offset[1]],
            id: json.id,
            image: IMAGE_Path + json.icon
        },
        style: {
            textValue: _filterName(json.name),
            size: [width, height],
            visible: Number(json.visible) == 1
        },
        data: _filterValue(_parseP(json.p), ["x", "y", "p", "width", "height", "icon"], json)
    };
});
let parseSegment = _check((json, offset)=> {
    let [x,y,width,height]=[Number(json.x), Number(json.y), DEFAULT_SIZE, DEFAULT_SIZE];
    return {
        type:"ImageNode",
        api: {
            position: [x  + offset[0], y + offset[1]],
            id: json.id,
            image: IMAGE_Path + json.icon
        },
        style: {
            textValue: _filterName(json.name),
            alpha: Number(json.visible),
            size: [width, height],
            visible: Number(json.visible) == 1
        },
        data: _filterValue(_parseP(json.p), ["x", "y", "p", "width", "height", "icon"], json)
    };
});
let parseGroup = _check((json, offset)=> {
    let [x,y,width,height]=[Number(json.x), Number(json.y), Number(json.width), Number(json.height)];
    let group = {
        type:"Group",
        api: {
            position: [x + offset[0], y  + offset[1]],
            id: json.id,
            add: []
        },
        state: {},
        style: {
            textValue: _filterName(json.name),
            alpha: Number(json.visible),
            size: [width, height],
            visible: Number(json.visible) == 1
        }
    };
    if (_.isArray(json.Node)) {
        group.api.add = group.api.add.concat(json.Node.map(item=>item.id));
    }
    if (_.notNull(json.Segment)) {
        if (_.isArray(json.Segment)) {
            group.api.add.concat(json.Segment.map(item=>item.id));
        } else {
            group.api.add.push(json.Segment.id);
        }
    }
    let p = _parseP(json.p);
    let groupP = _filterGroupP(p, group, IMAGE_Path);
    group.data = _filterValue(groupP, ["x", "y", "p", "width", "height", "Node", "Segment"], json);
    return group;
});
let parseLink = _check(json=> {
    let p = _parseP(json.p);
    let link = {
        type:"DirectLink",
        api: {
            id: json.id,
            path: [json.from, json.to],
            linkCount: p["link.count"],
            animate:{
                color: "255,255,255",
                speed: 2
            }
        },
        style: {
            visible: Number(json.visible) == 1
        },
        data: _filterValue(p, ["p", "from", "to"], json)
    };
    return link;
});
let parseLayer = json=> {
    let {WebTopo:{NetView:{
        Objects:{Object},
        Groups:{Group},
        Segments:{ Segment},
        Nodes:{Node},
        Links:{Link}
        }}}=json;
    let data = parseScene(json.WebTopo.NetView);
    return  {
        data,
        elements: {
            node: parseNode(Node, data.offset).concat(parseSegment(Segment, data.offset),parseObject(Object, data.offset)),
            group: parseGroup(Group, data.offset),
            link: parseLink(Link)
        }
    };
};

let parseAlarm = json=> {
    let alarm = new Map();
    if (json && json.node) {
        json.node.map(node=> {
            let [color,total] = ["", 0];
            for (let i = ALARM_COLOR.length; i > 0; i--) {
                let num = parseInt(node[i] || 0);
                total += num;
                if (num > 0) {
                    color = ALARM_COLOR[i];
                }
            }
            alarm.set(node.id, {
                color,
                total
            });
        });
    }
    return alarm;
};
export {parseLayer,parseAlarm, parseNode, parseSegment, parseObject, parseGroup, parseLink};
//----------
function _check(parser) {
    return function (json, offset = [0, 0]) {
        if (_.notNull(json)) {
            if (_.isArray(json)) {
                return json.map((node)=>parser(node, offset));
            }
            return [parser(json, offset)];
        }
        return [];
    }
}
function _parseP(arr) {
    let obj = {};
    if (arr && arr.length > 0) {
        arr.forEach((item)=>obj[item.k] = item.text);
    }
    return obj;
}
function _filterValue(obj, filter, json) {
    _.each(json, function (data, name) {
        if (!filter.includes(name)) {
            if (name == "type") {
                name = "elementType"
            }
            obj[name] = data;
        }
    });
    return obj;
}
function _filterGroupP(p, group, path) {
    let data = {};
    _.each(p, function (key, name) {
        switch (name) {
            case "group.closed.icon":
                group.api.image = path + p["group.closed.icon"];
                break;
            case "group.default.status":
                group.state.expanded = key == "open";
                break;
            case "shape.border.width":
                group.style.borderWidth = Number(key);
                break;
            case "shape.border.alpha":
                group.style.borderAlpha = Number(key);
                break;
            case "shape.fill.alpha":
                key = Number(key);
                group.style.alpha = key == 0 ? 0.1 : key;
                break;
            default:
                data[name] = key;
        }
    });
    return p;
}
function _filterName(str) {
    if (_.isString(str)) {
        str = str.replace(/\(/g, "\n(");
    }
    return str;
}