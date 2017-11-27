import { Element } from "./Element";
import { _ } from "./util";
import { Style } from "./style";

class Box extends Element {
    constructor() {
        super();
        Object.assign(this, {
            $position: [0, 0],
            _position: [0, 0]
        });
        Object.assign(this.$state, {
            draggable: true
        });
        this.$style = Object.create(Style.Box);
    }

    absolute(css) {
        const [ox, oy] = this.$scene.getOrigin();
        let [sWidth, sHeight] = this.$scene.getStageSize();
        sWidth /= this.$scene.$style.scale;
        sHeight /= this.$scene.$style.scale;

        if (_.notNull(css.left) && _.notNull(css.right)) {
            const _right = _.offset(css.right, sWidth),
                _left = _.offset(css.left, sWidth),
                _width = sWidth - _right - _left;
            if (_width > 0) {
                this.$position[0] = ox + _left + sWidth / 2;
                this.$style.size[0] = _width - this.$style.borderWidth * 2;
            } else {
                this.$position[0] = ox + sWidth / 2;
                this.$style.size[0] = sWidth - this.$style.borderWidth * 2;
            }
        } else if (_.notNull(css.left)) {
            this.$position[0] = ox + _.offset(css.left, sWidth) + this.$style.size[0] / 2 + this.$style.borderWidth;
        } else if (_.notNull(css.right)) {
            this.$position[0] = ox + sWidth - _.offset(css.right, sWidth) - this.$style.size[0] / 2 - this.$style.borderWidth;
        }

        if (_.notNull(css.top) && _.notNull(css.bottom)) {
            const _top = _.offset(css.top, sHeight),
                _bottom = _.offset(css.bottom, sHeight),
                _height = sHeight - _top - _bottom;
            if (_height > 0) {
                this.$position[1] = oy + _bottom + sHeight / 2;
                this.$style.size[1] = _height - this.$style.borderWidth * 2;
            } else {
                this.$position[1] = oy + sHeight / 2;
                this.$style.size[1] = sHeight - this.$style.borderWidth * 2;
            }
        } else if (_.notNull(css.top)) {
            this.$position[1] = oy + _.offset(css.top, sHeight) + this.$style.size[1] / 2 + this.$style.borderWidth;
        } else if (_.notNull(css.bottom)) {
            this.$position[1] = oy + sHeight - _.offset(css.bottom, sHeight) - this.$style.size[1] / 2 - this.$style.borderWidth;
        }

        this.$scene.repaint();
    }

    position(...arr) {
        if (arr.length > 0) {
            if (_.isNumeric(arr[0])) {
                this.$position[0] = arr[0];
            }
            if (_.isNumeric(arr[1])) {
                this.$position[1] = arr[1];
            }
            return this;
        }
        return this.$position;
    }

    getBoundary() {
        return {
            left: this.$position[0] - this.$style.size[0] / 2 - this.$style.borderWidth,
            top: this.$position[1] - this.$style.size[1] / 2 - this.$style.borderWidth,
            right: this.$position[0] + this.$style.size[0] / 2 + this.$style.borderWidth,
            bottom: this.$position[1] + this.$style.size[1] / 2 + this.$style.borderWidth,
            width: this.$style.size[0] + this.$style.borderWidth * 2,
            height: this.$style.size[1] + this.$style.borderWidth * 2
        }
    }

    isInStage() {
        const { left, top, width, height } = this.getBoundary(),
            [stageWidth, stageHeight] = this.$scene.getStageSize(),
            [translateX, translateY] = this.$scene.getTranslate(),
            scale = this.$scene.$style.scale,
            [leftX, leftY] = [(left + translateX) * scale, (top + translateY) * scale],
            [rightX, rightY] = [leftX + width * scale, leftY + height * scale];
        return leftX < stageWidth && leftY < stageHeight && 0 < rightX && 0 < rightY;
    }

    isInBoundary([targetX, targetY]) {
        const { left, top, width, height } = this.getBoundary();
        return targetX > left && targetX < left + width && targetY > top && targetY < top + height;
    }

    eventHandler(name, event) {
        switch (name) {
            case "remove":
                if (this.$outLinks) {
                    this.$outLinks.forEach(link => this.$scene.remove(link));
                    this.$outLinks.clear();
                }
                if (this.$inLinks) {
                    this.$inLinks.forEach(link => this.$scene.remove(link));
                    this.$inLinks.clear();
                }
                break;
            case "mousedrag":
                this.position(this._position[0] + event.dragWidth, this._position[1] + event.dragHeight);
                break;
            case "selected":
                this._position = [...this.$position];
                break;
        }
        return super.eventHandler(name, event);
    }

    toJson() {
        const json = super.toJson();
        json.api.position = this.$position;
        return json;
    }

    $paintBox(context, boundary) {
        return this;
    }

    $paintView(context) {
        const boundary = this.getBoundary();
        context.translate(...this.$position);
        return this.$paintBox(context, boundary)
            .$paintBorder(context, boundary)
            .$paintText(context, boundary);
    }


    $paintBorder(context, boundary = this.getBoundary()) {
        if (this.$style.borderWidth > 0) {
            const { borderWidth, borderRadius, borderColor, borderAlpha } = this.$style;
            if (0 == borderRadius) {
                context.beginPath();
                context.rect(borderWidth / 2 - boundary.width / 2, borderWidth / 2 - boundary.height / 2, boundary.width - borderWidth, boundary.height - borderWidth);
            } else {
                context.beginPath();
                context._roundRect(borderWidth / 2 - boundary.width / 2, borderWidth / 2 - boundary.height / 2, boundary.width - borderWidth, boundary.height - borderWidth, borderRadius);
            }
            context.strokeStyle = "rgba(" + borderColor + "," + borderAlpha + ")";
            context.lineWidth = borderWidth;
            context.stroke();
        }
        return this;
    }

    $paintText(context, boundary = this.getBoundary()) {
        if (this.$style.textVisible && _.notNull(this.$style.textValue)) {
            let { textOffset, textPosition, textValue, textAlpha, textSize, textFamily, textColor } = this.$style;
            context.font = textSize + "px " + textFamily;
            context.textBaseline = "bottom";
            context.textAlign = "center";
            context.fillStyle = "rgba(" + textColor + "," + textAlpha + ")";
            if (!textValue.split) {
                textValue = textValue + "";
            }
            const fontWidth = context.measureText("田").width,
                starX = _.offset(textPosition[0], boundary.width),
                startY = _.offset(textPosition[1], boundary.height),
                lines = textValue.split("\n");
            lines.forEach((line, i) =>
                context.fillText(
                    line,
                    textOffset[0] + starX - boundary.width / 2,
                    textOffset[1] + startY + fontWidth * (i + 1) - boundary.height / 2
                )
            );
        }
        return this;
    }

}
export { Box }
_.isBox = obj => obj instanceof Box;
