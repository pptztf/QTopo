require("./rightMenu.css");
function TEMP(type, name) {
    switch (type) {
        case "menu":
            return `<ul class='qtopo-rightMenu_Menu'></ul>`;
        case "subMenu":
            return `<li class='qtopo-rightMenu_item qtopo-rightMenu_subItem'><a class="qtopo-rightMenu_item-text">${name}</a></li>`;
        case "item":
            return `<li class="qtopo-rightMenu_item"><a class="qtopo-rightMenu_item-text">${name}</a></li>`;
        case "menuWrap":
            return `<div class='${WRAPNAME}'></div>`;
    }
}

const $data = new WeakMap();

class Menu {
    constructor(dom) {
        this.parent = dom;
        this.body = QTopo.util.$createDom(TEMP("menu"));
        dom.appendChild(this.body);
        this.item = [];
    }

    addItem(options) {
        if (options) {
            const item = QTopo.util.$createDom(TEMP("item", options.name));
            $data.set(item.firstChild, options.click);
            this.body.appendChild(item);
            this.item.push({
                body: item,
                type: 'item',
                click: options.click,
                name: options.name,
                filter: options.filter
            });
            return item;
        }
    }

    addSubMenu(options) {
        if (options) {
            const item = QTopo.util.$createDom(TEMP("subMenu", options.name)),
                subMenu = new Menu(item);
            $data.set(item.firstChild, options.click);
            this.body.appendChild(item);
            this.item.push({
                body: item,
                subMenu: subMenu,
                type: 'subMenu',
                order: options.order,
                name: options.name,
                filter: options.filter
            });
            return subMenu;
        }
    }
}

const MENU_CONFIG = {
    beforeFilter() {

    },
    afterFilter() {

    },
    beforeClick() {

    },
    afterClick() {

    }
};

export let rightMenu = function (config) {
    if (config && config.stage) {
        const dom = config.dom || document.body,
            rightMenu = bindEvent(new Menu(dom), config.stage),
            _ = QTopo.util;

        //上钩子
        _.each(MENU_CONFIG, (fn, name) => {
            if (_.isFunction(config[name])) {
                MENU_CONFIG[name] = config[name];
            }
        });

        return function (menuArray) {
            makeRightMenu(rightMenu, menuArray);
        }

    } else {
        console.error("rightMenu init need stage");
    }
};

function bindEvent(menu, stage) {
    let clickFn, trigger, evenCoordin, openClass = "";
    const _ = QTopo.util,
        parent = menu.parent,
        menuBody = menu.body,
        menuItems = menu.item;

    stage.on("mouseup", showRightMenu);

    _.$on(menuBody, 'click', menuAction);

    _.$on(menuBody, "mouseleave click", hideRightMenu);

    return menu;

    function showRightMenu(e) {
        if (e.button === 2) {
            evenCoordin = [e.x, e.y];
            trigger = e.target;
            MENU_CONFIG.beforeFilter(e);
            filter(menu, menuItems, trigger);
            MENU_CONFIG.afterFilter(e);
            show(menuBody);
            adjustPosition(e);
        }
    }

    function hideRightMenu(e) {
        hide(menuBody);
        if (openClass) {
            menuBody.classList.remove(openClass);
            openClass = "";
        }
    }

    function menuAction(e) {
        clickFn = $data.get(e.target);
        if (clickFn) {
            e = QTopo.util.cloneEvent(e);
            e.target = trigger;
            [e.x, e.y] = evenCoordin;
            MENU_CONFIG.beforeClick(e);
            clickFn(e);
            MENU_CONFIG.afterClick(e);
        }
    }

    function adjustPosition(e) {
        const ofx = e.offsetX,
            ofy = e.offsetY,
            pwidth = _.$width(parent),
            pheight = _.$height(parent),
            width = _.$width(menuBody),
            height = _.$height(menuBody),
            position = {
                left: 'auto',
                top: 'auto',
                right: 'auto',
                bottom: 'auto'
            },
            fix = 20,
            left = ofx > fix ? ofx - fix : 0,
            top = ofy > fix ? ofy - fix : 0,
            hw = (ofx + width) < pwidth,
            hh = (ofy + height) < pheight;

        if (hw && hh) {
            position.left = left + 'px';
            position.top = top + 'px';
        } else if (!hw && hh) {//宽不够,高够
            position.right = "0px";
            position.top = top + "px";
            openClass = "qtopo-rightMenu--left";

        } else if (hw && !hh) {//宽够,高不够
            position.left = left + 'px';
            position.bottom = "0px";
            openClass = "qtopo-rightMenu--up";

        } else if (!hw && !hh) {//宽不够,高不够
            position.right = "0px";
            position.bottom = "0px";
            openClass = "qtopo-rightMenu--left-up";

        }
        if (openClass) {
            menuBody.classList.add(openClass);
        }
        Object.assign(menuBody.style, position);
    }

}

function makeRightMenu(father, menus) {
    if (father && QTopo.util.isArray(menus)) {

        menus.forEach(function (menu) {
            if (QTopo.util.isArray(menu.item)) {
                if (father && menu) {
                    makeRightMenu(father.addSubMenu(menu), menu.item);
                }
            } else {
                if (father && menu) {
                    father.addItem(menu);
                }
            }
        });

    }
}
function filter(parent, items, menuTarget) {
    parent.showedChild = 0;

    items.forEach(item => {
        switch (item.type) {
            case 'item':
                filterItem(parent, item, menuTarget);
                break;
            case 'subMenu':
                filterSubMenu(parent, item, menuTarget);
                break;
        }
    });
}
function filterItem(parent, item, menuTarget) {
    if (QTopo.util.isFunction(item.filter)) {
        if (item.filter(menuTarget)) {
            show(item.body);
            parent.showedChild++;
        } else {
            hide(item.body);
        }
    } else {
        parent.showedChild++;
        show(item.body);
    }
}
function filterSubMenu(parent, subMenu, menuTarget) {
    if (QTopo.util.isFunction(subMenu.filter)) {
        if (subMenu.filter(menuTarget)) {
            show(subMenu.body);
            parent.showedChild++;
            filter(subMenu, subMenu.subMenu.item, menuTarget);//递归子项
        } else {
            hide(subMenu.body);
        }
    } else {
        filter(subMenu, subMenu.subMenu.item, menuTarget);//递归子项
        if (subMenu.showedChild == 0) {
            hide(subMenu.body);
        } else {
            show(subMenu.body);
            parent.showedChild++;
        }
    }
}
function show(dom) {
    dom.style.display = 'block';
}
function hide(dom) {
    dom.style.display = 'none';
}