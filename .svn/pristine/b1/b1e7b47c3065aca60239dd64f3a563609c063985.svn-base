import { MathLine } from "../math/line";
import { MathPath } from "../math/path";
import { Element, _ } from "../common";
import { Style } from "../common/style";

const ANIMATE_TYPE = {
    fixed: "fixed",
    percent: "percent"
}

class Link extends Element {
    constructor() {
        super();
        Object.assign(this, {
            $path: [],
            _animate: {
                distance: 0,
                callBack: null
            },
            _loopIndex: 0
        });
        Object.assign(this.$state, {
            paintAnimate: false,
            isLoop: false,
            showStartArrow: false,
            showEndArrow: true
        });
        this.$style = Object.create(Style.Link);
    }

    static interWithRect(start, end, bound) {
        if (start && end) {
            let point = MathLine.lineInter(start, end, [bound.left, bound.top], [bound.left, bound.bottom]);
            if (null == point) {
                point = MathLine.lineInter(start, end, [bound.left, bound.top], [bound.right, bound.top]);
                if (null == point) {
                    point = MathLine.lineInter(start, end, [bound.right, bound.top], [bound.right, bound.bottom]);
                    if (null == point) {
                        point = MathLine.lineInter(start, end, [bound.left, bound.bottom], [bound.right, bound.bottom]);
                    }
                }
            }
            return point;
        }
        return null;
    }

    static directLinks(start, end) {
        return [...start.$outLinks].filter(link => end.$inLinks.has(link));
    }

    static totalLinks(start, end) {
        return Link.directLinks(start, end).concat(Link.directLinks(end, start));
    }

    path(start, end) {
        if (checkLinkAble(this, start, end)) {
            if (this.$path && this.$path.length > 0) {
                this.eventHandler("remove");
            }
            start.$outLinks.add(this);
            end.$inLinks.add(this);
            this.$path = [start, end];
            this.$state.isLoop = start === end;
            if (this.$state.isLoop) {
                this._loopIndex = Link.totalLinks(start, end).length - 1;
            }
        }
        return this;
    }

    animate(config) {
        if (_.notNull(config)) {
            if (_.notNull(config.speed)) {
                this.$style.animateSpeed = config.speed;
            }
            if (config.color) {
                this.$style.animateColor = config.color;
            }
            if (_.isFunction(config.callBack)) {
                this._animate.callBack = config.callBack;
            }
            if (config.type) {
                this.$style.animateType = ANIMATE_TYPE[config.type] || ANIMATE_TYPE.fixed;
            }
            this._animate.distance = 0;
            this.$state.paintAnimate = true;
            this.$scene.getDynamic().add(this);
            this.$scene.repaint();
        }
        return this;
    }

    getTerminals() {
        const path = [],
            [start, end] = this.$path,
            isStartLink = _.isLink(start),
            isEndLink = _.isLink(end),
            startArrowOffset = this.$state.showStartArrow ? this.$style.arrowSize / 2 : 0,
            endArrowOffset = this.$state.showEndArrow ? this.$style.arrowSize / 2 : 0;
        let startPoint, endPoint;
        if (isStartLink) {
            startPoint = getPointOnLink(start.getTerminals(), this.$style.startPoint[0]);
        }
        if (isEndLink) {
            endPoint = getPointOnLink(end.getTerminals(), this.$style.endPoint[0]);
        }
        if (_.isBox(start)) {
            startPoint = getPointOnBox(
                start,
                isEndLink ? endPoint : end.$position,
                this.$style.startPoint
            );
        }
        if (_.isBox(end)) {
            endPoint = getPointOnBox(
                end,
                isStartLink ? startPoint : start.$position,
                this.$style.endPoint
            );
        }
        if (startPoint && endPoint) {
            endPoint = MathLine.reduced(endArrowOffset, startPoint, endPoint);
            startPoint = MathLine.reduced(startArrowOffset, endPoint, startPoint);
            path.push(startPoint, endPoint);
        }
        return path;
    }

    getPath() {
        if (!this.$state.isLoop) {
            return this.getTerminals();
        }
        return [];
    }

    getPercentPoint(percent, path = this.getPath(), totalLength = MathPath.totalLength(path)) {
        return MathPath.pointOnPath(percent, path, totalLength).point;
    }

    isInStage() {
        if (this.$path.length > 0) {
            if (this.$path.every(element => element.viewAble())) {
                return this.$path.some(element => element.isInStage()) || Link.interWithRect(...this.getTerminals(), this.$scene.getStageBoundary()) != null;
            }
        }
        return false;
    }

    isInBoundary(point) {
        if (this.$state.isLoop) {
            const e = MathLine.lengthBetween(this.$path[0].$position, point) - this.$style.loopGap * (this._loopIndex + 1);
            return Math.abs(e) <= 2;
        }
        return MathPath.isOnPath(point, this.getPath(), this.$style.lineWidth);
    }

    toJson() {
        const json = super.toJson();
        json.api.path = [this.$path[0].$id, this.$path[1].$id];
        if (this.$state.paintAnimate > 0) {
            json.api.animate = {};
        }
        return json;
    }

    eventHandler(name, event) {
        switch (name) {
            case "remove":
                this.$path[0].$outLinks.delete(this);
                this.$path[1].$inLinks.delete(this);
                if (this.$state.isLoop) {
                    let num = 0;
                    Link.totalLinks(this.$path[0], this.$path[1]).forEach(loopLink => {
                        loopLink._loopIndex = num;
                        num++;
                    });
                }
                break;
        }
        return super.eventHandler(name, event);
    }

    $paintDynamic(context) {
        if (this.$state.paintAnimate && !this.$state.isLoop && (_.notNull(this.$style.animateSpeed))) {
            const path = this.getPath(),
                totalLength = MathPath.totalLength(path);
            let percentOnLine = 0;


            switch (this.$style.animateType) {
                case ANIMATE_TYPE.fixed:
                    let addLength = 0;
                    if (_.isNumeric(this.$style.animateSpeed) && this.$style.animateSpeed > 0) {
                        addLength = this.$style.animateSpeed;

                    }
                    if (addLength > 0) {
                        this._animate.distance += addLength;
                        if (this._animate.distance >= totalLength) {
                            this._animate.distance = 0;
                            this._animate.callBack && this._animate.callBack(this);
                        }
                        percentOnLine = this._animate.distance / totalLength;
                    }
                    break;
                case ANIMATE_TYPE.percent:
                    if (this.$style.animateSpeed.indexOf && this.$style.animateSpeed.indexOf('s') > -1) {
                        this.$style.animateSpeed=1/(60*this.$style.animateSpeed.substring(0, this.$style.animateSpeed.indexOf('s')));
                    }
                    this._animate.distance += this.$style.animateSpeed;
                    if (this._animate.distance >= 1) {
                        this._animate.distance = 0;
                        this._animate.callBack && this._animate.callBack(this);
                    }
                    percentOnLine = this._animate.distance;
                    break;
            }

            if (percentOnLine > 0) {
                const currentPoint = this.getPercentPoint(percentOnLine, path, totalLength);
                if (currentPoint) {
                    context.fillStyle = "rgba(" + this.$style.animateColor + ", " + this.$style.alpha + ")";
                    context.beginPath();
                    context.arc(currentPoint[0], currentPoint[1], this.$style.lineWidth, 0, 2 * Math.PI);
                    context.fill();
                }
            }
        }
        return this;
    }

    $paintView(context) {
        const path = this.getPath();
        if (this.$state.isLoop) {
            const bound = this.$path[0].getBoundary(),
                radius = this.$style.loopGap * (this._loopIndex + 1);
            context.strokeStyle = "rgba(" + this.$style.color + "," + this.$style.alpha + ")";
            context.lineWidth = this.$style.lineWidth;
            context.beginPath();
            context.arc(bound.left, bound.top, radius, Math.PI / 2, 2 * Math.PI);
            context.stroke();
        } else {
            this.$paintLink(context, path);
        }
        return this.$paintText(context, path);
    }

    $paintLink(context, path) {
        if (path.length >= 2) {
            context.strokeStyle = "rgba(" + this.$style.color + "," + this.$style.alpha + ")";
            context.lineWidth = this.$style.lineWidth;
            context.beginPath();
            if (!_.isIOS) {
                context.setLineDash(this.$style.lineDash);
            }
            context._path(path, this.$style.lineRadius);
            context.stroke();
            this.$paintArrow(context, path);
        }
        return this;
    }

    $paintArrow(context, path) {
        const { arrowSize, arrowOffset, arrowType, arrowDirection, color, alpha } = this.$style;
        context.fillStyle = "rgba(" + color + "," + alpha + ")";
        if (arrowDirection) {
            if (this.$state.showStartArrow) {
                paint(path[1], path[0]);
            }
            if (this.$state.showEndArrow) {
                paint(path[path.length - 2], path[path.length - 1]);
            }
        } else {
            if (this.$state.showStartArrow) {
                paint(path[path.length - 1], path[0]);
            }
            if (this.$state.showEndArrow) {
                paint(path[0], path[path.length - 1]);
            }
        }
        return this;
        function paint(start, end) {
            switch (arrowType) {
                case 'triangle':
                    context._arrow(start, end, arrowSize, arrowOffset + arrowSize / 2, true);
                    break;
                default:
                    context._arrow(start, end, arrowSize, arrowOffset + arrowSize / 2, false);
            }
        }
    }

    $paintText(context, path) {
        if (this.$style.textVisible && _.notNull(this.$style.textValue)) {
            let [offsetX, offsetY] = this.$style.textOffset;
            context.textBaseline = "bottom";
            context.textAlign = "center";
            context.font = this.$style.textSize + "px " + this.$style.textFamily;
            context.fillStyle = "rgba(" + this.$style.textColor + ", " + this.$style.textAlpha + ")";
            if (this.$state.isLoop) {
                const [x, y] = this.$path[0].$position,
                    GAP = this.$style.loopGap * (this._loopIndex + 1);
                context.fillText(this.$style.textValue, x + GAP * Math.cos(-(Math.PI / 2 + Math.PI / 4)) + offsetX, y + GAP * Math.sin(-(Math.PI / 2 + Math.PI / 4)) + offsetY);
            } else {
                this.$paintPathText(context, path);
            }
        }
        return this;
    }

    $paintPathText(context, path) {
        if (path.length >= 2) {
            const { point, angle } = MathPath.pointOnPath(this.$style.textPosition, path);
            let [offsetX, offsetY] = this.$style.textOffset;
            offsetY = offsetY >= 0 ? offsetY - (this.$style.lineWidth + this.$style.borderWidth) / 2 : offsetY + (this.$style.lineWidth + this.$style.borderWidth) / 2;
            context.save();
            context.translate(...point);
            context.rotate(angle);
            context.fillText(this.$style.textValue, offsetX, offsetY);
            context.restore();
        }
        return this;
    }

}
_.isLink = obj => obj instanceof Link;
export { Link }
function getPointOnBox(box, end, offset) {
    const bound = box.getBoundary();
    if (!offset || offset.length == 0 || (offset[0] == 'auto' && offset[1] == 'auto')) {
        switch (box.$style.boxType) {
            case 'round':
                return;
            default:
                return Link.interWithRect(box.$position, end, bound);
        }
    } else {
        const result = [];

        if (offset[0] == 'auto') {
            if (box.$position[0] > end[0]) {
                result[0] = bound.left;
            } else {
                result[0] = bound.right;
            }
        } else {
            result[0] = _.offset(offset[0], bound.width) + bound.left;
        }

        if (offset[1] == 'auto') {
            if (box.$position[1] > end[1]) {
                result[1] = bound.top;
            } else {
                result[1] = bound.bottom;
            }
        } else {
            result[1] = _.offset(offset[1], bound.height) + bound.top;
        }
        return result;
    }
}
function getPointOnLink(path, percent = 0.5) {
    if (path && path.length > 0) {
        return MathPath.pointOnPath(_.percent(percent), path).point;
    }
}
function checkLinkAble(link, start, end) {
    if (_.isElement(start) && _.isElement(end)) {
        return checkLink(link, start) && checkLink(link, end);
    } else {
        console.info("can not make path between none linkAble element", start, end);
        return false;
    }
}
function checkLink(link, any) {
    if (_.isLink(any)) {
        if (link !== any) {
            if (any.$path.every(el => el !== link)) {
                return true;
            } else {
                console.info("can not make path it will be a loop");
            }
        } else {
            console.info("can not make path with link self");
        }

    }
    return true;
}