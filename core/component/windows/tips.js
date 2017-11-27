export let tips = function ({ dom }) {
    const _ = QTopo.util;
    let win = dom.querySelector(".qtopo-tips"),
        offset = 30,
        left = 0,
        top = 0;
    if (!_.notNull(win)) {
        win = _.$createDom('<div class="qtopo-tips">');
        dom.appendChild(win);
    }
    return {
        open(data, x, y, position) {
            win.innerHTML = data;
            switch (position) {
                case 'top':
                    left = x - _.$width(win) / 2;
                    top = y - _.$height(win) - offset;
                    break;
                case 'left':
                    left = x - _.$width(win) - offset;
                    top = y - _.$height(win) / 2;
                    break;
                case 'bottom':
                    left = x - _.$width(win) / 2;
                    top = y + offset;
                    break;
                default:
                    left = x + offset;
                    top = y + offset
            }
            win.style.left = left + 'px';
            win.style.top = top + 'px';
            win.classList.add("qtopo-component--active");
        },
        close() {
            win.classList.remove("qtopo-component--active");
        }
    }
};