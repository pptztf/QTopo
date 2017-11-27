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
            })
            .on("click", function (e) {
                console.info(e.x, e.y)
            });
    //Node
    var node1 = scene.addNode()
        .position(100, 100)
        .image(image_node, true)
        .style({
            borderWidth: 5
        });
    var node2 = scene.addNode()
        .position(100, 400)
        .image(image_node)
        .style({
            borderWidth: 5
        });


    scene.addLink().path(node1, node2).style({ startPoint: ["auto", "auto"], endPoint: ['auto', "auto"], textValue: "1" });
});

