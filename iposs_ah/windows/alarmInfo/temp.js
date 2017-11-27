var win = require("./temp.html");
export default function (iposs) {
    win = $(win).hide();
    $(iposs.dom).append(win);
    const [lv1, lv2, lv3, lv4] = [win.find(".alarmDetail_lv1"), win.find(".alarmDetail_lv2"), win.find(".alarmDetail_lv3"), win.find(".alarmDetail_lv4")],
        _ = QTopo.util,
        colors = iposs.alarmColor;
    lv1.css("color", "rgb(" + _.transColor(colors[0]) + ")");
    lv2.css("color", "rgb(" + _.transColor(colors[1]) + ")");
    lv3.css("color", "rgb(" + _.transColor(colors[2]) + ")");
    lv4.css("color", "rgb(" + _.transColor(colors[3]) + ")");
    win.open = function (all) {
        win.show();
        lv1.text(filter(all[1]));
        lv2.text(filter(all[2]));
        lv3.text(filter(all[3]));
        lv4.text(filter(all[4]));
    };
    return win;

    function filter(num){
        return num>0?num:0;
    }
};