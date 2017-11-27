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

                    if (v.active == 'true') {
                        menu.classList.add("active");
                    }

                });
            }
        }

        function doAction(e) {
            let target = _.$closest(e.target, "li"),
                menu = $data.get(target);
            if (QTopo.util.notNull(menu) && QTopo.util.isFunction(menu.click)) {
                menu.click(menu);
            }

            forEachMenu(li => {
                menu = $data.get(li);
                if (menu.isActive()) {
                    li.classList.add('active');
                } else {
                    li.classList.remove('active');
                }
            });
        }

        function forEachMenu(fn) {
            var lis = panel.childNodes;
            for (let i = 0, len = lis.length; i < len; i++) {
                fn(lis[i], i);
            }
        }

    } else {
        console.error("toolbar init need set dom");
    }
};