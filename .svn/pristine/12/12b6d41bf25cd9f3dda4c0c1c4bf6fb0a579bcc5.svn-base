import { _ } from "../common";
import { MathLine } from "../math/line";
import { Link } from "./Link";
import {Style} from "../common/style";

class CurveLink extends Link {
    constructor() {
        super();
        this.$style = Object.create(Style.CurveLink);
    }

    getPath() {
        const path = [];
        if (!this.$state.isLoop) {
            const [startPoint, endPoint] = super.getTerminals();
            if (startPoint && endPoint) {
                path.middle = MathLine.verticalInterParallel(
                    [(startPoint[0] + endPoint[0]) / 2, (startPoint[1] + endPoint[1]) / 2],
                    startPoint, endPoint,
                    this.$style.lineRadius
                );
                path.text = MathLine.quadraticAt(startPoint, path.middle, endPoint, 1 / 2);
                path.push(startPoint);
                for (var i = 1; i <= 5; i++) {
                    path.push(MathLine.quadraticAt(startPoint, path.middle, endPoint, i / 5));//取样份与选取难度相关
                }
                path.push(endPoint);
            }
        }
        return path
    };

    getPercentPoint(time, path = this.getPath()) {
        return MathLine.quadraticAt(path[0], path.middle, path[path.length - 1], time);
    }

    isInBoundary(point) {
        const path = this.getPath();
        if (path.length >= 2){
            const start = path[0],
                middle = path.middle,
                end = path[path.length - 1],
                lineWidth = this.$style.lineWidth;
            if (lineWidth === 0) {
                return false;
            }
            if (
                (point[1] > start[1] + lineWidth && point[1] > middle[1] + lineWidth && point[1] > end[1] + lineWidth) ||
                (point[1] < start[1] - lineWidth && point[1] < middle[1] - lineWidth && point[1] < end[1] - lineWidth) ||
                (point[0] > start[0] + lineWidth && point[0] > middle[0] + lineWidth && point[0] > end[0] + lineWidth) ||
                (point[0] < start[0] - lineWidth && point[0] < middle[0] - lineWidth && point[0] < end[0] - lineWidth)
            ) {
                return false;
            }
            var shadow = MathLine.shadowOnQuadratic(point, start, middle, end);
            return MathLine.lengthBetween(point, shadow) <= lineWidth / 2;
        }

    };

    isInStage() {
        if (!this.$state.isLoop) {
            if (this.$path.length > 0) {
                if (this.$path.every(element => element.viewAble())) {
                    if (this.$path.some(element => element.isInStage())) {
                        return true;
                    }
                    const path = this.getPath();
                    for (let i = 1; i < path.length; i++) {
                        if (Link.interWithRect(path[i - 1], path[i], this.$scene.getStageBoundary()) != null) {
                            return true
                        }
                    }
                }
            }
            return false;
        }
        return super.isInStage();
    }

    $paintLink(context, path) {
        if (path.length > 0 && path.middle) {
            context.strokeStyle = "rgba(" + this.$style.color + "," + this.$style.alpha + ")";
            context.lineWidth = this.$style.lineWidth;
            context.beginPath();
            if (!_.isIOS) {
                context.setLineDash(this.$style.lineDash);
            }
            context.moveTo(...path[0]);
            context.quadraticCurveTo(...path.middle, ...path[path.length - 1]);
            context.stroke();
            context.closePath();
            this.$paintArrow(context, path);
        }
        return this;
    };

    $paintPathText(context, path) {
        if (path.length >= 2 && path.text) {
            const [offsetX, offsetY] = this.$style.textOffset,
                angle = Math.atan((path[path.length - 1][1] - path[0][1]) / (path[path.length - 1][0] - path[0][0]));
            context.save();
            context.translate(...path.text);
            context.rotate(angle);
            context.fillText(this.$style.textValue, offsetX, offsetY);
            context.restore();
        }
        return this;
    };

}
export { CurveLink }