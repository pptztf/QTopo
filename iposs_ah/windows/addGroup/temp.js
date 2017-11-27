import { util } from "../util";
let win = require("./temp.html");
const _ = QTopo.util;
export default function (iposs) {
    win = util.initBase(iposs.dom, win);
    const sizeType = initSizeSelect(win, iposs.scene);
    win.on("window.open", function (e, d) {
        const selectedNode = iposs.scene.$selected.size > 0;
        sizeType.disable(!selectedNode);
        sizeType.select(selectedNode ? "0" : "1");
        util.setFormInput(win, {
            name: '',
            height: 100,
            width: 100
        });
    });
    //劫持表单
    util.initFormSubmit(win.find("form"), data => {
        doWithForm(win, iposs, data, sizeType);
        win.close();
    });
    return win;
};
function doWithForm(win, iposs, data, sizeType) {
    if (_.notNull(win.data("todo"))) {
        let todo = win.data("todo"),
            position = todo.position,
            children = [];


        position = position ? position.map(i => Math.floor(i)) : [0, 0];

        iposs.scene.$selected.map(child => {
            if (_.isNode(child) && !_.notNull(child.$group)) {
                children.push(child);
            }
        });

        const groupConfig = sizeType.val(position, children),
            groupJson = Object.assign(groupConfig, {
                name: data.name,
                childids: children.map(e => e.$id).join(","),
                pid: iposs.scene.data("pid"),
                visible: 1,
                zindex: 0
            });
        console.info("添加分组", groupJson);
        iposs.factory.addGroup(groupJson).then(e => {

            iposs.events.TopoEvent_REFRESH();
            console.info("添加分组成功");

        });
    }
}
function initSizeSelect(win, scene) {
    const type = win.find("select[name=size_type]"),
        height = win.find("input[name=height]"),
        heightRow = height.closest(".form-group"),
        width = win.find("input[name=width]"),
        widthRow = width.closest(".form-group");
    type.change(function () {
        select(type.val());
    });
    function select(value) {
        switch (value) {
            case '0':
                heightRow.hide();
                widthRow.hide();
                break;
            case '1':
                heightRow.show();
                widthRow.show();
                break;
        }
        type.val(value);
    };
    return {
        select,
        disable: function (flag) {
            type.attr("disabled", !!flag);
        },
        val: function (position, children) {
            var offset = scene.$data.offset;
            switch (type.val()) {
                case '0':
                    var range = QTopo._els.Group.getRange(children);
                    return {
                        width: range.width,
                        height: range.height,
                        x: parseInt(range.left + range.width / 2 - offset[0]),
                        y: parseInt(range.top + range.height / 2 - offset[1])
                    };
                case '1':
                    return {
                        height: height.val(),
                        width: width.val(),
                        x: parseInt(position[0] - offset[0]),
                        y: parseInt(position[1] - offset[1])
                    }
            }
        }
    };
}
