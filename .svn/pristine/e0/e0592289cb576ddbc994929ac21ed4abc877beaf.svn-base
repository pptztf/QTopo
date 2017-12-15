import { _ } from "./util";
import { Base } from "./Base";
import { Style } from "./style";

class Element extends Base {
    constructor() {
        super();
        Object.assign(this, {
            $outLinks: new Set(),
            $inLinks: new Set(),
            $scene: null
        });
        Object.assign(this.$state, {
            paintAble: true,
            selected: false,
            mouseOver: false
        });
        this.$style = Object.create(Style.Element);
    }
    isInStage() {
        console.error(this, "isInStage need overwrite!");
        return true;
    }

    isInBoundary() {
        console.error(this, "isInBoundary need overwrite!");
        return true;
    }

    viewAble() {
        return this.$state.paintAble && this.$style.visible;
    }

    eventHandler(name, event) {
        switch (name) {
            case 'remove':
                this.$outLinks.forEach(link => this.$scene.remove(link));
                this.$outLinks.clear();
                this.$inLinks.forEach(link => this.$scene.remove(link));
                this.$inLinks.clear();
                this.$scene.getDynamic().remove(this);
                break;
            case 'selected':
                this.$state.selected = true;
                break;
            case 'unselected':
                this.$state.selected = false;
                break;
            case 'mouseover':
                this.$state.mouseOver = true;
                break;
            case 'mouseout':
                this.$state.mouseOver = false;
                break;
        }
        return super.eventHandler(name, event);
    }

    $paintDynamic() {
        console.error(this, "paintDynamic need overwrite!");
        return this;
    }

    $paint(...arr) {
        return this.$paintShadow(...arr)
            .$paintSelected(...arr)
            .$paintMouseOver(...arr)
            .$paintView(...arr);
    }

    $paintShadow(context) {
        if (this.$style.shadowBlur > 0) {
            context.shadowOffsetX = this.$style.shadowOffset[0];
            context.shadowOffsetY = this.$style.shadowOffset[1];
            context.shadowBlur = this.$style.shadowBlur;
            context.shadowColor = this.$style.shadowColor;
        }
        return this;
    }

    $paintLighting(context) {
        context.shadowBlur = this.$style.lighting;
        context.shadowColor = this.$style.lightingColor;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        return this;
    }

    $paintSelected(...arr) {
        if (this.$state.selected) {
            return this.$paintLighting(...arr);
        }
        return this;
    }

    $paintMouseOver(...arr) {
        if (this.$state.mouseOver) {
            return this.$paintLighting(...arr);
        }
        return this;
    }

    $paintView() {
        console.error(this, "$paintView need overwrite!");
        return this;
    }
}
_.isElement = obj => obj instanceof Element;
export { Element }
