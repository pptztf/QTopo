import {_} from "../common";
import {Node} from "./Node";
import {Style} from "../common/style";

class TextNode extends Node {
    constructor() {
        super();
        this.$style = Object.create(Style.Text);
    }

    $paintText(context) {
        return this;
    }

    $paintBox(context) {
        if (_.notNull(this.$style.textValue)) {
            let lines = this.$style.textValue.split("\n"),
                fontWidth = context.measureText("田").width,
                width,
                maxWidth = 0;
            context.font = this.$style.textSize + "px " + this.$style.textFamily;
            context.textBaseline = "Alphabetic";
            context.textAlign = "center";
            context.fillStyle = "rgba(" + this.$style.textColor + "," + this.$style.textAlpha + ")";
            lines.forEach((line, i) => {
                context.fillText(
                    line,
                    0,
                    fontWidth * (i + 1)
                );
            });
            lines.forEach(text=> {
                width = context.measureText(text).width;
                if (width > maxWidth) {
                    maxWidth = width;
                }
            });
            this.$style.size = [maxWidth + 3, (fontWidth * lines.length) + 3];
        }
        return this;
    }
}
export {TextNode}