export let progress = function ({ dom }) {
    const _ = QTopo.util;
    let win = dom.querySelector(".qtopo-progress");
    if (!_.notNull(win)) {
        win = _.$createDom(`<div class="qtopo-progress qtopo-blackboard">
                        <div class="qtopo-progress_body">
                            <div class="qtopo-progress_info"></div>
                            <div class="qtopo-progress_state"></div>
                            <div class="qtopo-progress_bar"></div>
                        </div>
                    </div>`);
        dom.appendChild(win)
    }
    const bar_div = win.querySelector('.qtopo-progress_bar'),
        state_div = win.querySelector('.qtopo-progress_state'),
        info_div = win.querySelector('.qtopo-progress_info');
    return {
        isShow() {
            return win.classList.contains("qtopo-component--active");
        },
        open({ state, info, warning }={state:100, info:'null', warning:null}) {
            if (_.notNull(info)) {
                info_div.innerText=info;
            }
            if (_.notNull(state)) {
                if (state >= 0 && state <= 100) {
                    state = state + "%";
                    state_div.innerText = state;
                    bar_div.style.width = state;
                }
            }
            if (warning) {
                bar_div.classList.add("qtopo-progress_bar--warning");
            } else {
                bar_div.classList.remove("qtopo-progress_bar--warning");
            }
            win.classList.add("qtopo-component--active");

            if (state == '100%') {
                setTimeout(() => {
                    win.classList.remove("qtopo-component--active");
                    setTimeout(() => bar_div.style.width = 0, 700);
                }, 1000);
            }
        },
        close() {
            win.classList.remove("qtopo-component--active");
        }
    };
};
