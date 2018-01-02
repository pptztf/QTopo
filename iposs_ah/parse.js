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
                image: imagePath + (json.visible == 1 ? json.icon : (json.icon.substring(0, json.icon.indexOf('.png')) + '_glory.png'))
            },
            style: {
                textValue: json.name,
                size: [width, height]
            },
            data: filterNodeJson(json)
        };
        node.data.elementType = json.type;
        return node;
    });
    const parseLink = _check((json,nodeAndSegmentJson) => {
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
            style: {},
            state: {
                showStartArrow: false,
                showEndArrow: false
            },
            data: filterLinkJson(nodeAndSegmentJson,json)
        };
        if (_.notNull(json.color)) {
            link.style.color = _.transColor(json.color);
        }
        link.data.elementType = json.type;
        return link;
    });
    const parseGroup = _check((json, offset = scene.data("offset")) => {
        console.log(json,'group');
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
    //�ַ���ƴ��-showLevel ���ж���ʾ����, ���ڵ���������ɫ��ο���
    const parseAlarm = json => {
        const alarm = new Map();
        let level = json.attribute.showLevel;
        var alarmTip = ['C', 'S', 'M'];
        json.node.map(node => {
            let [color, content] = ["", 0];
            let alarmList = [];
            let flag = 0;
            for (var i = 1; i <= level; i++) {
                if (node[i] != 0) {
                    flag = 1;
                    alarmList.push({
                        text: node[i] + alarmTip[i - 1],
                        color: alarmColor[i - 1]
                    })
                }
            }
            if (flag) {
                alarm.set(node.id, {
                    color: 'red',
                    alarmList: alarmList
                });
            }
        });
        return alarm;
    };
    const parseLayer = json => {
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
            linkData = parseLink(json.Links.Link,[].concat(json.Segments.Segment,json.Nodes.Node));
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

function filterLinkJson(nodeAndSegmentJson,json) {
    var linkParm = {
        linkid:json.id,
        from_id:json.from,
        to_id:json.to
    };
    nodeAndSegmentJson.forEach(e=>{
        if(e!=undefined){
            if(e.id==json.from){
                linkParm.from=e.name
                if(e.p){
                    linkParm.from_ip = parseObjToMap(e.p).get("mo_id")
                }else{
                    linkParm.from_ip=e.name
                }
            }else if(e.id==json.to){
                linkParm.to=e.name
                if(e.p){
                    linkParm.to_ip = parseObjToMap(e.p).get("mo_id");
                }else{
                    linkParm.to_ip=e.name
                }
            }
        }
    })
    json.linkParm = linkParm;
    return json;
}

function filterNodeJson(json) {
    // json.p==undefined? json:parseObjToMap(json.p).get("deviceMode")
    if(json.p){
        json.mo_id = parseObjToMap(json.p).get("mo_id");
        return json
    }else{
        return json;
    }
}

function parseObjToMap(arr) {
    var pMap = new Map();
    arr.forEach((ele) => {
        pMap.set(ele.k, ele.content);
    })
    return pMap;
}
