import {Box,_} from "../common";

class Node extends Box {
    constructor() {
        super();
        Object.assign(this, {
            $group: null
        });
    }

    eventHandler(name, event) {
        switch (name) {
            case "remove":
                if (_.notNull(this.$group)) {
                    this.$group.remove(this);
                }
                break;
        }
        return super.eventHandler(name, event);
    }

    $paintBox(context) {
        context.fillStyle = "rgba(" + this.$style.color + "," + this.$style.alpha + ")";
        if (0 == this.$style.borderRadius) {
            context.beginPath();
            context.rect(
                -this.$style.size[0]/2,
                -this.$style.size[1]/2,
                ...this.$style.size
            );
        } else {
            context.beginPath();
            context._roundRect(
                -this.$style.size[0]/2,
                -this.$style.size[1]/2,
                ...this.$style.size,
                this.$style.borderRadius
            );
        }
        context.fill();
        return this;
    }
}
_.isNode = obj => obj instanceof Node;
export {Node};

