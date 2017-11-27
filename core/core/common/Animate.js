class Animate {
    constructor(fn) {
        this.stopTag = null;
        this.frame = fn;
    }

    start() {
        let frameWorker = () => {
            this.frame();
            this.stopTag = window.requestAnimationFrame(frameWorker);
        };
        frameWorker();
        return this;
    }

    stop() {
        window.cancelAnimationFrame(this.stopTag);
        return this;
    }
}
export {Animate}