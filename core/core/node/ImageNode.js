import { Animate, _ } from "../common";
import { Node } from "./Node";
import { Style } from "../common/style";

class ImageNode extends Node {
    constructor() {
        super();
        Object.assign(this, {
            $image: ""
        });
        Object.assign(this.$state, {
            paintAlarm: false
        });
        this.$style = Object.create(Style.Image);
    }

    alarm(config) {
        if (_.notNull(config)) {
            Object.assign(this.$style, config);
        }
        this.$state.showAlarm = true;
        if (_.notNull(this.$style.image)) {
            _.colorImageCache(this.$style.image, this.$style.alarmColor);
        }
        this.$scene.getDynamic().add(this);
        this.$scene.repaint();
        return this;
    }

    image(str) {
        if (_.isString(str)) {
            const scene = this.$scene;
            _.imageCache(str).then(data => {
                this.$image = str;
                if (_.notNull(data)) {
                    this.$style.image = data;
                    if (this.$style.asImageSize) {
                        this.$style.size = [data.width, data.height];
                    }
                    if (this.$state.showAlarm) {
                        _.colorImageCache(data, this.$style.alarmColor);
                    }
                }
                scene.repaint();
            });
            return this;
        } else {
            return this.$image;
        }
    }

    toJson() {
        const json = super.toJson();
        json.api.image = this.$image;
        if (this.$state.showAlarm) {
            json.api.alarm = {};
        }
        return json;
    }

    $paintDynamic(context) {
        if (this.$state.showAlarm) {
            const x = this.$position[0] + this.$style.borderWidth,
                y = this.$position[1] + this.$style.borderWidth,
                flashValue = this.$scene.$stage.$breath / 3,
                addWidth = this.$style.size[0] * flashValue / 100,
                addHeight = this.$style.size[1] * flashValue / 100,
                width = this.$style.size[0] + addWidth,
                height = this.$style.size[1] + addHeight;
            context.translate(this.$position[0], this.$position[1]);
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowBlur = flashValue;
            context.shadowColor = "rgba(" + this.$style.alarmColor + ", " + this.$style.alarmAlpha + ")";
            if (_.notEmptyObject(this.$style.image)) {
                context.drawImage(
                    _.colorImageCache(this.$style.image, this.$style.alarmColor),
                    -width / 2,
                    -height / 2,
                    width, height
                );
            } else {
                if (0 == this.$style.borderRadius) {
                    context.beginPath();
                    context.rect(
                        0, 0,
                        width, height
                    );
                } else {
                    context.beginPath();
                    context._roundRect(
                        0, 0,
                        width, height,
                        this.$style.borderRadius
                    );
                }
                context.fillStyle = "rgba(" + this.$style.color + "," + this.$style.alpha + ")";
                context.fill();
            }
        }
    }

    $paintBox(context) {
        if (_.notEmptyObject(this.$style.image)) {
            const globalAlpha = context.globalAlpha;
            context.globalAlpha = this.$style.alpha;
            if (this.$state.showAlarm) {
                context.drawImage(
                    _.colorImageCache(this.$style.image, this.$style.alarmColor),
                    -this.$style.size[0] / 2,
                    -this.$style.size[1] / 2,
                    ...this.$style.size
                );
            } else {
                context.drawImage(
                    this.$style.image,
                    -this.$style.size[0] / 2,
                    -this.$style.size[1] / 2,
                    ...this.$style.size
                );
            }
            context.globalAlpha = globalAlpha;
        } else {
            super.$paintBox(context);
        }
        return this.$paintAlarm(context);
    }

    $paintAlarm(context) {
        if (this.$state.showAlarm&&this.$style.alarmText != "") {
            context.font = this.$style.alarmTextSize + "px " + this.$style.alarmTextFamily;
            context.textBaseline = "bottom";
            context.textAlign = "start";
            const lineWidth = context.measureText(this.$style.alarmText).width,
                fontWidth = context.measureText("田").width,
                padding = this.$style.alarmPadding,
                startX = -this.$style.borderWidth - this.$style.size[0] / 2 - lineWidth / 2 - padding,
                startY = -this.$style.borderWidth - this.$style.size[1] / 2 - fontWidth - padding * 2 - 5,
                panelWidth = lineWidth + padding * 2,
                panelHeight = fontWidth + padding * 2;
            context.strokeStyle = "rgba(" + this.$style.alarmColor + ", " + this.$style.alarmAlpha + ")";
            context.fillStyle = "rgba(" + this.$style.alarmColor + ", " + this.$style.alarmAlpha + ")";
            context.lineWidth = 1;
            context.beginPath();
            context.rect(
                startX,
                startY,
                panelWidth,
                panelHeight
            );
            context.moveTo(startX + panelWidth / 2 - 8, startY + panelHeight);
            context.lineTo(startX + panelWidth / 2, startY + panelHeight + 8);
            context.lineTo(startX + panelWidth / 2 + 8, startY + panelHeight);
            context.fill();
            context.fillStyle = "rgba(" + this.$style.alarmTextColor + ", " + this.$style.alarmAlpha + ")";
            context.fillText(
                this.$style.alarmText,
                startX + padding,
                startY + fontWidth + padding
            );
        }
        return this;
    }
}
export { ImageNode };

