let loadingType = [
    `<div class="qtopo-logo-loading">
        <img class="qtopo-logo-loading_img" src="">
        <svg class="qtopo-logo-loading_svg" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="qtopo-logo-loading_inner-border" cx="100" cy="100" r="55"/>
            <circle class="qtopo-logo-loading_inner" cx="100" cy="100" r="55"/>
            <circle class="qtopo-logo-loading_inner-tiny" cx="100" cy="100" r="55"/>
            <circle class="qtopo-logo-loading_outer" cx="100" cy="100" r="80"/>
            <circle class="qtopo-logo-loading_outer-tiny" cx="100" cy="100" r="80"/>
        </svg>
    </div>`,
    `<div class="qtopo-ow-loading">
        <div class="qtopo-ow-loading_hexagon qtopo-ow-loading_position-1"></div>
        <div class="qtopo-ow-loading_hexagon qtopo-ow-loading_position-2"></div>
        <div class="qtopo-ow-loading_hexagon qtopo-ow-loading_position-3"></div>
        <div class="qtopo-ow-loading_hexagon qtopo-ow-loading_position-4"></div>
        <div class="qtopo-ow-loading_hexagon qtopo-ow-loading_position-5"></div>
        <div class="qtopo-ow-loading_hexagon qtopo-ow-loading_position-6"></div>
        <div class="qtopo-ow-loading_hexagon qtopo-ow-loading_position-7"></div>
    </div>`
];
export let loading = function ({ dom, type, logo }) {
    const _ = QTopo.util;
    if (QTopo.util.notNull(type)) {
        const win = _.$createDom(loadingType[type]);
        if (type == 0 && QTopo.util.notNull(logo)) {
            win.querySelectorAll('img')[0].setAttribute('src', logo);
        }
        dom.appendChild(win);
        return {
            open() {
                win.classList.add("qtopo-component--active");
                return this;
            },
            close() {
                win.classList.remove("qtopo-component--active");
                return this;
            },
            position(str) {
                const domWidth = _.$width(dom),
                    domHeight = _.$height(dom),
                    width = _.$width(win),
                    height = _.$height(win);
                let left, top;
                switch (str) {
                    case 'center':
                        left = (domWidth - width) / 2;
                        top = (domHeight - height) / 2;
                        break;
                    case 'left':
                        left = 0;
                        top = domHeight-height*2;
                        break;
                    default:
                        left = domWidth - width;
                        top = domHeight - height;
                }
                win.style.left = left + 'px';
                win.style.top = top + 'px';
                return this;
            }
        };
    }
};