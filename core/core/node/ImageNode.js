import { Animate, _ } from "../common";
import { Node } from "./Node";
import { Style } from "../common/style";

const alarmPadding = 5;
class ImageNode extends Node {
    constructor() {
        super();
        Object.assign(this, {
            $image: ""
        });
        Object.assign(this.$state, {
            showAlarm: false
        });
        this.$style = Object.create(Style.Image);
    }

    alarm(config) {
        this.$state.showAlarm = true;
        if (config) {
            if (_.isArray(config.alarmList)) {
                this.$style.alarmList = config.alarmList;
            } else {
                this.$style.alarmText = config.alarmText;
            }
            this.$style.alarmColor = config.alarmColor;
        }
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
                        -width / 2,
                        -height / 2,
                        width, height
                    );
                } else {
                    context.beginPath();
                    context._roundRect(
                        -width / 2,
                        -height / 2,
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
        if (this.$state.showAlarm) {
            context.font = this.$style.alarmTextSize + "px " + this.$style.alarmTextFamily;
            context.textBaseline = "bottom";
            context.textAlign = "start";
            const fontWidth = context.measureText("田").width;

            if (this.$style.alarmList && this.$style.alarmList.length > 0) {
                let totalWidth = 0, widthStore = [], lineWidth;
                //收集总长度,确定起始位置
                this.$style.alarmList.forEach(v => {
                    lineWidth = context.measureText(v.text).width;
                    widthStore.push(lineWidth);
                    totalWidth += lineWidth + 2 * alarmPadding;
                });
                let startX = -this.$style.borderWidth - this.$style.size[0] / 2 - totalWidth / 2,
                    startY = -this.$style.borderWidth - this.$style.size[1] / 2 - fontWidth - alarmPadding * 2 - 5;
                //开始绘制
                this.$style.alarmList.forEach((v, i) => {
                    paintAlarm(
                        context, v.text, fontWidth,
                        startX, startY,
                        v.color || this.$style.alarmColor,
                        v.textColor || this.$style.alarmTextColor,
                        v.alpha || this.$style.alarmAlpha
                    );
                    startX += widthStore[i] + 2 * alarmPadding;
                });

            }
            else if (this.$style.alarmText !== "") {
                const lineWidth = context.measureText(this.$style.alarmText).width,
                    startX = -this.$style.borderWidth - this.$style.size[0] / 2 - lineWidth / 2 - alarmPadding / 2,
                    startY = -this.$style.borderWidth - this.$style.size[1] / 2 - fontWidth - alarmPadding * 2 - 5;

                paintAlarm(
                    context, this.$style.alarmText,
                    fontWidth, startX, startY,
                    this.$style.alarmColor,
                    this.$style.alarmTextColor,
                    this.$style.alarmAlpha
                );

            }
        }
        return this;
    }
}
export { ImageNode };

function paintAlarm(ctx, text, fontWidth, x, y, color, textColor, alpha) {
    const lineWidth = ctx.measureText(text).width,
        panelWidth = lineWidth + alarmPadding * 2,
        panelHeight = fontWidth + alarmPadding * 2;
    ctx.strokeStyle = "rgba(" + color + ", " + alpha + ")";
    ctx.fillStyle = "rgba(" + color + ", " + alpha + ")";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.rect(
        x,
        y,
        panelWidth,
        panelHeight
    );
    ctx.fill();
    ctx.fillStyle = "rgba(" + textColor + ", " + alpha + ")";
    ctx.fillText(
        text,
        x + alarmPadding,
        y + fontWidth + alarmPadding
    );
}