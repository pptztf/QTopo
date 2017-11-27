(function () {
    const vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] +
            'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        console.info("use timeout");
        window.requestAnimationFrame = (callback) => window.setTimeout(function () {
            callback();
        }, 1e3 / 30);
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = (id) => clearTimeout(id);
    }
}());
Promise.prototype.finally = function (callback) {
    const P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => {
            throw reason
        })
    );
};

Set.prototype.filter=function(fn){
    return new Set([...this].filter(fn));
};

Set.prototype.map=function(fn){
    return new Set([...this].map(fn));
};
if(!"".includes){
    String.prototype.includes=function(i){
        return this.indexOf(i)>-1;
    }
}