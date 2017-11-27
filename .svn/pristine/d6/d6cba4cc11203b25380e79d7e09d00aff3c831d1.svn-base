const [_, DEFAULT_SIZE] = [QTopo.util, 36];
export let initParse = function (iposs) {
    const {
        scene,
        imagePath,
        alarmColor
    } = iposs;
    const parseNode = _check((json, offset = scene.data("offset")) => {
        const [x, y, width, height] = [_checkNum(json.x), _checkNum(json.y), DEFAULT_SIZE, DEFAULT_SIZE];
        const node = {
            type: "ImageNode",
            api: {
                position: [x + offset[0], y + offset[1]],
                id: json.id,
                image: imagePath + json.icon
            },
            style: {
                textValue: json.name,
                size: [width, height]
            },
            data: json
        };
        node.data.elementType = json.type;
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
                    speed: 1,
                }
            },
            style: {

            },
            state: {
                showStartArrow: false,
                showEndArrow: false
            },
            data: json
        };
        if (_.notNull(json.color)) {
            link.style.color = _.transColor(json.color);
        }
        link.data.elementType = json.type;
        return link;
    });
    const parseGroup = _check((json, offset = scene.data("offset")) => {
        let children = [];
        if (json.Node) {
            if (_.isArray(json.Node)) {
                children = json.Node.map(i => i.id);
            } else if (json.Node.id) {
                children.push(json.Node.id);
            }
        }
        const group = {
            api: {
                add: children,
                position: [
                    _checkNum(json.x) + offset[0],
                    _checkNum(json.y) + offset[1]
                ],
                id: json.id,
                image: imagePath + json.icon
            },
            style: {
                textValue: json.name,
                textSize: 20,
                textPosition: ["50%", -20],
                size: [
                    _checkNum(json.width) || 300,
                    _checkNum(json.height) || 300
                ]
            },
            state: {
                expanded: true
            },
            data: json
        };
        group.data.elementType = json.type;
        return group;
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
        console.info(json);
        if (json && json.WebTopo && json.WebTopo.NetView) {
            json = json.WebTopo.NetView;
        } else {
            return {
                data: {}
            }
        }
        let XY = json.XY,
            x = 0,
            y = 0;
        if (XY) {
            x = XY.iMinX || 0;
            y = XY.iMinY || 0;
        }
        const
            data = {
                name: json.name,
                id: json.id,
                pid: json.pid,
                offset: [Number(x), Number(y)]
            },
            nodeData = parseNode(json.Nodes.Node, data.offset),
            segmentData = parseNode(json.Segments.Segment, data.offset),
            ObjectData = parseNode(json.Objects.Object, data.offset),
            GroupData = parseGroup(json.Groups.Group, data.offset),
            linkData = parseLink(json.Links.Link);
        return {
            data,
            elements: {
                node: nodeData.concat(segmentData, ObjectData),
                link: linkData,
                group: GroupData
            }
        }
    };

    iposs.parser = {
        parseNode,
        parseGroup,
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
function _checkNum(num) {
    return Number(num) || 0;
}
