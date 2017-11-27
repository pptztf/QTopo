class Popup {
    constructor(dom, title) {
        this.temp = QTopo.util.$createDom(`<div class='${title || ''} qtopo-blackboard'>
                <div class='qtopo-popup_body'>
                    <div class='qtopo-popup_title'>
                    </div>
                    <div class='qtopo-popup_content'>
                    </div>
                    <div class='qtopo-popup_foot'>
                    </div>
                </div>
            </div>`);
        this.title = this.temp.querySelector('.qtopo-popup_title');
        this.content = this.temp.querySelector('.qtopo-popup_content');
        this.foot = this.temp.querySelector('.qtopo-popup_foot');
        dom.appendChild(this.temp);
    }

    open(config) {
        if (QTopo.util.notNull(config)) {
            for (let [key, value] of Object.entries(config)) {
                if (QTopo.util.notNull(this[key])) {
                    this[key].innerHTML = value;
                }
            }
        }
        this.temp.classList.add("qtopo-component--active");
    }

    close() {
        this.temp.classList.remove("qtopo-component--active");
    }
}
export { Popup };

export const alert = function ({ dom }) {
    const win = new Popup(dom, 'qtopo-alert'),
        ok = QTopo.util.$createDom("<button type='button' class='qtopo-btn'>确定</button>");
    QTopo.util.$on(ok, 'click', () => win.close());
    win.foot.appendChild(ok);
    return {
        open(config) {
            win.open(config);
        },
        close() {
            win.close();
        }
    }
};

export const confirm = function ({ dom }) {
    const win = new Popup(dom, 'qtopo-confirm'),
        okFn = [],
        cancelFn = [],
        ok = QTopo.util.$createDom("<button type='button' class='qtopo-btn'>确定</button>"),
        cancel = QTopo.util.$createDom("<button type='button' class='qtopo-btn'>取消</button>");
    QTopo.util.$on(ok, 'click', () => {
        okFn.forEach(fn => fn());
        okFn.length = 0;
        cancelFn.length = 0;
        win.close();
    });
    QTopo.util.$on(cancel, 'click', () => {
        cancelFn.forEach(fn => fn());
        okFn.length = 0;
        cancelFn.length = 0;
        win.close();
    });
    win.foot.appendChild(ok);
    win.foot.appendChild(cancel);
    return {
        open(config) {
            win.open(config);
            return {
                ok(fn) {
                    if (QTopo.util.isFunction(fn)) {
                        okFn.push(fn);
                    }
                    return this;
                },
                cancel(fn) {
                    if (QTopo.util.isFunction(fn)) {
                        cancelFn.push(fn);
                    }
                    return this;
                }
            };
        },
        close() {
            win.close();
        }
    }
};
