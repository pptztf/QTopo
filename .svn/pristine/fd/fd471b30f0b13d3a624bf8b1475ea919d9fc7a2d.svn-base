/**
 * Created by qiyc on 2017/5/8.
 */
QTopo.util.$ready(function () {
    var _ = QTopo.util,
        IMAGE_PATH = "./images/demo/",
        image_node = IMAGE_PATH + "wlan_4.png";
    console.info(_.dateFormat(new Date(), "yyyy/MM/dd hh:mm:ss"));
    var dom = document.getElementsByClassName("topo")[0];
    var stage = QTopo(dom, {
        background: '#06243e',
    }),
        scene = stage.add()
            .mode("edit")
            .on("dblclick", function (e) {
                var target = e.target;
                console.info(target || scene);
                if (target && _.isFunction(target.toggle)) {
                    target.toggle();
                }
            })
            .on("click", function (e) {
                console.info(e.x, e.y)
            });
    initComponent({
        dom: dom,
        scene: scene
    });
    //Node
    var node1 = scene.addNode()
        .position(100, 100)
        .image(image_node, true)
        .style({
            "textValue": "node1",
            borderWidth: 10,
            borderRadius: 10
        });
    var node2 = scene.addNode()
        .position(100, 400)
        .image(image_node)
        .style({
            textValue: "node2",
            textPosition: ["200%", "30%"],
            borderWidth: 10,
            borderRadius: 10
        });
    var node3 = scene.addNode()
        .position(400, 100)
        .image(image_node)
        .style({
            "textValue": "node3",
            borderWidth: 10,
            borderRadius: 10
        })
        .alarm();

    var text = scene.addNode("text")
        .position(250, 50)
        .style({
            textValue: "first Text"
        });

    var groupedA = scene.addNode("text")
        .position(250, 150).style({
            textValue: "second Text"
        });
    var groupedB = scene.addNode("shape")
        .position(250, 250).style({
            shapeType: "round",
            size: [40, 40],
            textValue: "round"
        });
    //Path
    scene.addPath()
        .newLine({
            lineWidth: 15,
            color: "255,0,255"
        })
        .moveTo([0, 0])
        .lineTo([200, 0])
        .newLine({
            lineWidth: 15,
            lineRadius: 10
        })
        .moveTo([100, 20])
        .lineTo([100, 100])
        .lineTo([200, 100])
        .position(300, 300)
        .style({
            textValue: "Path!",
            textPosition: ["50%", -30]
        });

    //Group
    var group = scene.addGroup()
        .style({
            size: [300, 300],
            textValue: "group\ngroup for Test",
            borderWidth: 10
        })
        .position(250, 250)
        .layout("fixed")
        .image(image_node)
        .state({
            expand: false
        })
        .add(groupedA, groupedB);


    //Link
    scene.addLink().path(node1, node2).linkCount(5);
    scene.addLink().path(node3, group);

    var link1 = scene.addLink().path(node1, node3).style({ startPoint: ["auto", 0], endPoint: ['auto', 0], textValue: "0" });
    scene.addLink().path(node1, node3).style({ startPoint: ["auto", "33%"], endPoint: ['auto', "33%"], textValue: "1" });
    scene.addLink().path(node1, node3).style({ startPoint: ["auto", "66%"], endPoint: ['auto', "66%"], textValue: "2" });
    scene.addLink().path(node1, node3).style({ startPoint: ["auto", "100%"], endPoint: ['auto', "100%"], textValue: "3" });

    scene.addLink("curve").path(node1, node2)
        .style({
            startPoint: ["auto", "auto"],
            endPoint: ["auto", "auto"],
            textValue: "curve"
        });

    scene.addLink().path(node1, node1);
    scene.addLink().path(node1, node1);
    scene.addLink().path(node1, node1);

});
QTopo.util.$ready(function () {
    var _ = QTopo.util,
        IMAGE_PATH = "./images/demo/",
        image_node = IMAGE_PATH + "wlan_4.png";
    var dom = document.getElementsByClassName("topo2")[0];
    var stage2 = QTopo(dom, {
        background: '#0b90c2',
    }),
        scene2 = stage2.add()
            .mode("edit")
            .on("dblclick", function (e) {
                var target = e.target;
                console.info(target || scene2);
                if (target && _.isFunction(target.toggle)) {
                    target.toggle();
                }
            })
            .on("click", function (e) {
                console.info(e.x, e.y)
            });
    initComponent({
        dom: dom,
        scene: scene2
    });
    var star = scene2.addNode("shape")
        .position(100, 200)
        .style({
            shapeType: "star",
            size: [40, 40],
            textValue: "star",
            borderWidth: 10
        });
    var round = scene2.addNode("shape")
        .position(300, 200)
        .style({
            shapeType: "round",
            size: [40, 40],
            textValue: "round",
            borderWidth: 10,
        });
    var rect = scene2.addNode("shape")
        .position(197.5, 300).style({
            shapeType: "rect",
            size: [40, 40],
            textValue: "rect",
            borderWidth: 10,
        });
    var round2 = scene2.addNode("shape")
        .position(500, 200).style({
            shapeType: "round",
            size: [60, 40],
            textValue: "round",
            borderWidth: 10,
        });
    var triangle = scene2.addNode("shape")
        .position(600, 200)
        .style({
            shapeType: "triangle",
            size: [40, 40],
            textValue: "triangle",
            borderWidth: 10,
        });

    var foldLink = scene2.addLink("fold")
        .path(round2, triangle)
        .style({
            foldPoints: 2,
        })
        // .animate({
        //     speed: 2
        // });

    var link1 = scene2.addLink().path(star, round)
        // .animate({
        //     speed: 2
        // });;
    var link2 = scene2.addLink().path(rect, foldLink)
        // .animate({
        //     speed: 2
        // });
    var link3 = scene2.addLink("curve")
    .animate({
        // speed: 2
    }).path(link2, link1);
    var link4 = scene2.addLink("curve")
    .animate({
        // speed: 2
    }).path(link1, star);


});
function initComponent(config) {
    var alert = QTopo.initAlert(config),
        tips = QTopo.initTips(config);
    config.scene
        .on('mousemove', function (e) {
            if (e.target) {
                tips.open(e.target.$style.textValue, e.offsetX, e.offsetY, 'top');
            } else {
                tips.close();
            }
        })
        .on("mousedown", function () {
            tips.close();
        });
    Object.assign(config.scene, {
        alert: alert
    });
}