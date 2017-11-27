const [_, DEFAULT_SIZE] = [QTopo.util, 36];
export let initParse = function (iposs) {
    const {
        scene,
        imagePath,
        alarmColor
    } = iposs;
    const parseNode = _check((json, offset = scene.data("offset")) => {
        const [x, y, width, height] = [Number(json.x), Number(json.y), DEFAULT_SIZE, DEFAULT_SIZE];
        const node = {
            type: "ImageNode",
            api: {
                position: [x + offset[0], y + offset[1]],
                id: json.id,
                image: imagePath + json.icon
            },
            style: {
                textValue: _filterName(json.title),
                size: [width, height]
            },
            data: _filterValue(["x", "y", "icon"], json)
        };
        if (node.data.type == -1) {
            node.api.image = imagePath + "virtual.png"
        }
        node.data.elementType = _nodeType(json);
        return node;
    });
    const parseLink = _check(json => {
        const link = {
            type: "DirectLink",
            api: {
                id: json.id,
                path: [json.from, json.to],
                animate: {
                    color: "255,255,255",
                    speed: 2
                }
            },
            style: {

            },
            state: {
                showStartArrow: true
            },
            data: _filterValue(["from", "to", "color"], json)
        };
        if (_.notNull(json.color)) {
            link.style.color = _.transColor(json.color);
        }
        link.data.elementType = "link";
        return link;
    });
    const parseAlarm = json => {
        const alarm = new Map();
        json.node.map(node => {
            let [color, content] = ["", 0];
            for (let i = alarmColor.length - 1; i > -1; i--) {
                let num = parseInt(node[i] || 0);
                content += num;
                if (num > 0) {
                    color = alarmColor[i - 1];
                }
            }
            if (content > 0) {
                alarm.set(node.id, {
                    color,
                    content
                });
            }
        });
        return alarm;
    };
    const parseLayer = json => {
        json = json.WebTopo.NetView;
        let x = json.Nodes.XY.iMinX || 0,
            y = json.Nodes.XY.iMinY || 0;
        const data = {
            id: json.id,
            pid: json.pid,
            offset: [Number(x), Number(y)]
        },
            nodeData = parseNode(json.Nodes.Device, data.offset),
            linkData = parseLink(json.Nodes.Link);
        return {
            data,
            elements: {
                node: nodeData,
                link: linkData
            }
        }
    };
    iposs.parser = {
        parseNode,
        parseLink,
        parseAlarm,
        parseLayer
    };
};
//-----------------
function _check(parser) {
    return function (json, ...arr) {
        if (_.notNull(json)) {
            if (_.isArray(json)) {
                return json.map((node) => parser(node, ...arr));
            }
            return [parser(json, ...arr)];
        }
        return [];
    }
}

function _filterValue(filter, json) {
    const obj = {};
    _.each(json, function (data, name) {
        if (!filter.includes(name)) {
            obj[name] = data;
        }
    });
    return obj;
}

function _filterName(str) {
    if (_.isString(str)) {
        str = str.replace(/\(/g, "\n(");
    }
    return str;
}

function _nodeType(json) {
    if (json.switch == 1) {
        return "segment"
    }
    return "node";
}