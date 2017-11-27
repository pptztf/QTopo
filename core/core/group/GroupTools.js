import { Box, _ } from "../common";

class GroupTools extends Box {
    constructor() {
        super();
    }

    add(...arr) {
        arr.forEach(element => {
            if (_.isNode(element)) {
                if (_.notNull(element.$group)) {
                    element.$group.remove(element);
                }
                element.$group = this;
                this.$children.add(element);
                element.$state.paintAble = this.$state.expanded;
            }
        })
        return this;
    }

    remove(...arr) {
        arr.forEach(element => {
            if (this.has(element)) {
                element.$group = null;
                this.$children.delete(element);
                element.$state.paintAble = true;
            }
        })
        return this;
    }

    clear() {
        this.$children.forEach(element => {
            element.$group = null;
            element.$state.paintAble = true;
        });
        this.$children.clear();
    }

    position(...arr) {
        if (arr.length > 0) {
            const ox = arr[0] - this.$position[0],
                oy = arr[1] - this.$position[1];
            this.$children.forEach(child => child.position(ox + child.$position[0], oy + child.$position[1]));
        }
        return super.position(...arr);
    }

    has(...arr) {
        return arr.every((element) => element.$group === this && this.$children.has(element));
    }

    eventHandler(name, event) {
        switch (name) {
            case "remove":
                this.clear();
                break;
        }
        return super.eventHandler(name, event);
    }

    toggle(flag) {
        if (_.notNull(flag)) {
            this.$state.expanded = flag && true;
        } else {
            this.$state.expanded = !this.$state.expanded;
        }
        this.$children.forEach(element => element.$state.paintAble = this.$state.expanded);
        return this;
    }

    image(str) {
        if (_.notNull(str)) {
            _.imageCache(str).then(data => {
                this.$image = str;
                this.$style.closedImage = data;
            });
            return this;
        } else {
            return this.$image;
        }
    }

    getBoundary() {
        if (this.$state.expanded) {
            return super.getBoundary();
        } else {
            return {
                left: this.$position[0] - this.$style.closedSize[0] / 2 - this.$style.borderWidth,
                top: this.$position[1] - this.$style.closedSize[1] / 2 - this.$style.borderWidth,
                right: this.$position[0] + this.$style.closedSize[0] / 2 + this.$style.borderWidth,
                bottom: this.$position[1] + this.$style.closedSize[1] / 2 + this.$style.borderWidth,
                width: this.$style.closedSize[0] + this.$style.borderWidth * 2,
                height: this.$style.closedSize[1] + this.$style.borderWidth * 2
            }
        }
    }

}
export { GroupTools }