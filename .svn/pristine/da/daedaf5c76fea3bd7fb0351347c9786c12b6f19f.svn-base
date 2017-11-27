import { _ } from "./util";
const Element = {
    alpha: 1,
    zIndex: 0,
    visible: true,
    color: _.randomColor(),
    shadowBlur: 0,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: [3, 6],
    borderAlpha: 1,
    borderWidth: 0,
    borderColor: "255,255,255",
    borderRadius: 0,
    textValue: "",
    textAlpha: 1,
    textVisible: true,
    textOffset: [0, 0],
    textSize: 14,
    textFamily: "Consolas",
    textColor: "255,255,255",
    lighting: 30,
    lightingColor: "rgba(255,255,255,1)"
},
    Link = newStyle(Element, {
        loopGap: 5,
        zIndex: 3,
        startPoint: [],
        endPoint: [],
        color: "0,255,255",
        textPosition: 0.5,
        lineDash: [0, 0],
        lineWidth: 3,
        lineRadius: 0,
        lighting: 10,
        arrowType: "triangle",
        arrowDirection: false,
        arrowSize: 10,
        arrowOffset: 0,
        animateColor: "255,255,255",
        animateSpeed: null,
        animateType:"fixed"
    }),
    Box = newStyle(Element, {
        boxType: "rect",
        size: [32, 32],
        position: [0, 0],
        zIndex: 4,
        textPosition: ['50%', '100%']
    }),
    Path = newStyle(Box, {
        size: [0, 0],
        zIndex: 2,
        lighting: 10,
        lineWidth: 5,
        lineRadius: 0,
        lineDash: [0, 0],
        color: "0,255,255",
        textPosition: ["50%", "50%"]
    }),
    Node = newStyle(Box, {}),
    Group = newStyle(Box, {
        zIndex: 1,
        color: "0,255,255",
        size: [100, 100],
        alpha: 0.1,
        closedImage: "",
        closedSize: [50, 50],
        closedAlpha: 1
    }),
    Image = newStyle(Node, {
        image: null,
        asImageSize: false,
        alarmText: "no alarm text",
        alarmAlpha: 1,
        alarmColor: "255,0,0",
        alarmTextSize: 16,
        alarmTextFamily: "Consolas",
        alarmTextColor: "255,255,255",
        alarmPadding: 5
    }),
    Shape = newStyle(Node, {
        shapeType: "round"
    }),
    Text = newStyle(Node, {
        textValue: "not set textValue"
    }),
    CurveLink = newStyle(Link, {
        lineRadius: 50
    }),
    DirectLink = newStyle(Link, {
        lineGap: 10,
        lineSegment: 20,
        colors: []
    }),
    FoldLink = newStyle(Link, {
        foldReserve: false,
        foldPoints: [],
        arrowDirection: true
    }),
    Style = {
        Element,
        Link,
        Box,
        Node,
        Group,
        Image,
        Shape,
        Text,
        Path,
        CurveLink,
        DirectLink,
        FoldLink
    }
export {
    Style
}

function newStyle(old, config) {
    return Object.assign(
        Object.create(old),
        config
    );
}