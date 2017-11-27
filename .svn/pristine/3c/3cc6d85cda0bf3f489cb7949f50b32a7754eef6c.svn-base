require("./toolbar.css");

export let toolbar = function ({ dom }) {
    if (QTopo.util.notNull(dom)) {
        const _ = QTopo.util,
            $data = new WeakMap(),
            panel = _.$createDom(`<ul class="qtopo-toolbar_panel"></ul>`);
        dom.appendChild(panel);
        _.$on(panel, "click", doAction);

        return function (menuArr) {
            if (QTopo.util.isArray(menuArr)) {
                let menu;
                menuArr.forEach(v => {
                    menu = _.$createDom(`<li><a class="qtopo-toolbar_item">${v.icon}</a></li>`);
                    menu.setAttribute("title", v.name);
                    $data.set(menu, v);
                    panel.appendChild(menu);
                });
            }
        }

        function doAction(e) {
            let toolbar = $data.get(_.$closest(e.target, "li"));
            if (QTopo.util.notNull(toolbar) && QTopo.util.isFunction(toolbar.click)) {
                toolbar.click(toolbar);
            }
        }
    } else {
        console.error("toolbar init need set dom");
    }
};