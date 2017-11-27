import { _ } from "../common";
import { GroupTools } from "./GroupTools";
import { Style } from "../common/style";

class Group extends GroupTools {
    constructor() {
        super();
        Object.assign(this, {
            $image: null,
            $layout: fixed,
            $children: new Set()
        });
        Object.assign(this.$state, {
            expanded: false
        });
        this.$style = Object.create(Style.Group);
    }

    static getRange(nodes) {
        if (nodes && nodes.forEach) {
            let left = Number.MAX_VALUE,
                right = Number.MIN_VALUE,
                top = Number.MAX_VALUE,
                bottom = Number.MIN_VALUE,
                width = 0,
                height = 0;
            let childBound = null;
            nodes.forEach(child => {
                childBound = child.getBoundary();
                left = Math.min(childBound.left, left);
                right = Math.max(childBound.right, right);
                top = Math.min(childBound.top, top);
                bottom = Math.max(childBound.bottom, bottom);
                width = right - left;
                height = bottom - top;
            });
            return {
                width, height, left, right, top, bottom
            }
        }
    }

    layout(type) {
        if (_.notNull(type)) {
            switch (type) {
                case "auto":
                    this.$layout = auto;
                    break;
                case "fixed":
                    this.$layout = fixed;
                    break;
            }
        } else {
            return this.$layout.name;
        }
        return this;
    }

    toJson() {
        const json = super.toJson(),
            add = [];
        this.$children.forEach(el => add.push(el.$id));
        Object.assign(json.api, {
            add,
            image: this.$image,
            layout: this.layout()
        });
        return json;
    }

    $paintBox(context) {
        if (this.$state.expanded) {
            this.$layout(this);
            context.fillStyle = "rgba(" + this.$style.color + "," + this.$style.alpha + ")";
            if (0 == this.$style.borderRadius) {
                context.beginPath();
                context.rect(
                    -this.$style.size[0] / 2,
                    -this.$style.size[1] / 2,
                    ...this.$style.size
                );
            } else {
                context.beginPath();
                context._roundRect(
                    -this.$style.size[0] / 2,
                    -this.$style.size[1] / 2,
                    ...this.$style.size,
                    this.$style.borderRadius
                );
            }
            context.fill();
            return this;
        }
        return this.$paintClosed(context);
    }

    $paintClosed(context) {
        if (_.notEmptyObject(this.$style.closedImage)) {
            const globalAlpha = context.globalAlpha;
            context.globalAlpha = this.$style.closedAlpha;
            context.drawImage(
                this.$style.closedImage,
                -this.$style.closedSize[0] / 2,
                -this.$style.closedSize[1] / 2,
                ...this.$style.closedSize
            );
            context.globalAlpha = globalAlpha;
        } else {
            context.beginPath();
            context.rect(
                -this.$style.closedSize[0] / 2,
                -this.$style.closedSize[1] / 2,
                ...this.$style.closedSize
            );
            context.fillStyle = "rgba(" + this.$style.color + "," + this.$style.closedAlpha + ")";
            context.fill();
        }
        return this;
    }

}
export { Group }
_.isGroup = obj => obj instanceof Group;
//-------------布局
function auto(group) {
    const childrenSet = group.$children,
        borderWidth = group.$style.borderWidth;
    if (childrenSet.size > 0) {
        const range = Group.getRange(childrenSet);
        if (range.width < 100) {
            range.width = 100;
        }
        if (range.height < 100) {
            range.height = 100;
        }
        group.$position[0] = range.left + range.width / 2;
        group.$position[1] = range.top + range.height / 2;
        group.$style.size[0] = range.width;
        group.$style.size[1] = range.height;
    } else {
        group.$style.size = [100, 100];
    }
}
function fixed(group) {
    const groupBound = group.getBoundary(),
        borderWidth = group.$style.borderWidth;
    let childBound = null, needChange = false;
    group.$children.forEach(child => {
        needChange = false;
        childBound = child.getBoundary();
        if (childBound.top < groupBound.top + borderWidth) {
            childBound.top = groupBound.top + borderWidth;
            needChange = true;
        } else if (childBound.bottom > groupBound.bottom - borderWidth) {
            childBound.top = groupBound.bottom - childBound.height - borderWidth;
            needChange = true;
        }
        if (childBound.left < groupBound.left + borderWidth) {
            childBound.left = groupBound.left + borderWidth;
            needChange = true;
        } else if (childBound.right > groupBound.right - borderWidth) {
            childBound.left = groupBound.right - childBound.width - borderWidth;
            needChange = true;
        }
        if (needChange) {
            child.position(childBound.left + childBound.width / 2, childBound.top + childBound.height / 2);
        }
    });
}