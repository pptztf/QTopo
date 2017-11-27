let mutexCache = [];
$.fn.serializeJson = function () {
    let serializeObj = {},
        array = this.serializeArray();
    array.forEach(v=> {
        if (serializeObj[v.name]) {
            serializeObj[v.name] += ';' + v.value;
        } else {
            serializeObj[v.name] = v.value;
        }
    });
    return serializeObj;
}
$.fn.setForm = function (jsonValue) {
    $.each(jsonValue, (key, value)=> {
        let inputElement = this.find("input[name=" + key + "]");
        if (inputElement.attr("type") == "checkbox") {
            if (value !== null) {
                let checkboxObj = $("[name=" + key + "]");
                let checkArray = value.split(";");
                for (let i = 0; i < checkboxObj.length; i++) {
                    for (let j = 0; j < checkArray.length; j++) {
                        if (checkboxObj[i].value == checkArray[j]) {
                            $(checkboxObj[i]).attr("checked", true);
                        } else {
                            $(checkboxObj[i]).attr("checked", false);
                        }
                    }
                }
            }
        }
        else if (inputElement.attr("type") == "radio") {
            inputElement.each(function () {
                let radioObj = $("[name=" + key + "]");
                for (let i = 0; i < radioObj.length; i++) {
                    if (radioObj[i].value == value) {
                        radioObj[i].click();
                    }
                }
            });
        }
        else if (inputElement.attr("type") == "textarea" && value) {
            this.find("[name=" + key + "]").html(value);
        }
        else if (typeof value != 'undefined') {
            this.find("[name=" + key + "]").val(value);
        }
    })
};
export let util = {
    initFormSubmit: function (form, fn) {
        form.submit(function (e) {
            if ($.isFunction(fn)) {
                fn(form.serializeJson());
            }
            return false;
        });
    },
    setFormInput: function (dom, json) {
        dom.setForm(json);
    },
    initBase: function (dom, win) {
        dom = $(dom);
        win = $(win).hide();
        let wrap = dom.find(".iposs-windows");
        if (wrap.length == 0) {
            wrap = $("<div class='iposs-windows'></div>");
            dom.append(wrap);
        }
        wrap.append(win);
        win.movement = false;
        win.close = () =>win.trigger("window.close");
        win.open = data=>win.data("todo", data).trigger("window.open");
        mutexCache.push(win);//注册窗口开启互斥
        win.on("window.open", () =>mutexCache.forEach(v=>win != v && v.css("display") != "none" && v.trigger("window.close")))
            .on("window.open", () =>win.css({top: (dom.height() - win.height()) / 2, left: 0}).show())
            .on("window.close", ()=>win.data("todo", "").hide())
            .find(".panel-heading")//按住标题可移动
            .mousedown(e=> {
                win.movePageX = e.pageX - win.offset().left;
                win.movePageY = e.pageY - win.offset().top;
                win.movement = true;
            })
            .mouseup(e=>win.movement = false)
            .find(".close")
            .on("click", e=>win.trigger("window.close"));
        dom.mousemove(e=>win.movement && win.css({left: e.pageX - win.movePageX, top: e.pageY - win.movePageY}));
        return win;

    }
};