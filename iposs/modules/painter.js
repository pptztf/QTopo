
export default iposs => {
    const scene = iposs.scene,
        factory = iposs.factory,
        windows=iposs.windows,
        parser = iposs.parser;
    return {
        addGroup,
        addNode,
        addLink,
        paintAlarm,
        paintLayer
    }
    function addGroup(data) {
        return scene.addGroups(parser.parseGroup(data));
    }
    function addNode(data) {
        return scene.addNodes(parser.parseNode(data));
    }
    function addLink(data) {
        return scene.addLinks(parser.parseLink(data));
    }
    function paintAlarm(data) {
        const map = parser.parseAlarm(data);
        if (map.size > 0) {
            let id, alarm;
            scene.map(node => {
                id = node.data("id");
                if (map.has(id)) {
                    alarm = map.get(id);
                    node.alarm({
                        alarmColor: alarm.color,
                        alarmText: alarm.content
                    });
                }
            }, "node");
        }
    }
    function paintLayer(data) {
        scene.clear();
        scene.addByJson(parser.parseLayer(data));
        scene.center();
        const alarm = factory.alarm();
        if (alarm) {
            alarm.then(function (alarmData) {
                paintAlarm(alarmData);
                windows("alarmInfo", alarmData.all);
            }).catch(e => {
                console.info(e);
                iposs.progress(100, "未知错误,请联系管理员!", true);
                iposs.alert("未知错误,请联系管理员!");
            });
        }
    }
}