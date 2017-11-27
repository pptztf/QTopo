import {_} from"../common";
import {MathPath} from "../math/path";
import {Link}from"./Link";
import {Style} from "../common/style";

class DirectLink extends Link {
    constructor() {
        super();
        Object.assign(this, {
            $linkCount: 1
        });
        Object.assign(this.$state, {
            expanded: false
        });
        this.$style = Object.create(Style.DirectLink);
    }

    static  getDirectPathWidthLineGap([sx, sy], [ex, ey], total, index, lineSegment, lineGap) {
        const path = [],
            lineAngle = Math.atan2(ey - sy, ex - sx),
            offsetStart = [sx + lineSegment * Math.cos(lineAngle), sy + lineSegment * Math.sin(lineAngle)],
            offsetEnd = [ex + lineSegment * Math.cos(lineAngle - Math.PI), ey + lineSegment * Math.sin(lineAngle - Math.PI)],
            gapAngle = lineAngle - Math.PI / 2,
            gap = total * lineGap / 2 - lineGap / 2,
            beginGap = lineGap * index,
            firstMiddle = [offsetStart[0] + beginGap * Math.cos(gapAngle), offsetStart[1] + beginGap * Math.sin(gapAngle)],
            secondMiddle = [offsetEnd[0] + beginGap * Math.cos(gapAngle), offsetEnd[1] + beginGap * Math.sin(gapAngle)];
        path.push([sx, sy]);
        path.push([firstMiddle[0] + gap * Math.cos(gapAngle - Math.PI), firstMiddle[1] + gap * Math.sin(gapAngle - Math.PI)]);
        path.push([secondMiddle[0] + gap * Math.cos(gapAngle - Math.PI), secondMiddle[1] + gap * Math.sin(gapAngle - Math.PI)]);
        path.push([ex, ey]);
        return path;
    }

    linkCount(num) {
        if (_.notNull(num)) {
            if (num > 1) {
                this.$linkCount = parseInt(num);
                this.$style.textValue = "(+" + num + ")";
            }
            return this;
        }
        return this.$linkCount;
    }

    toggle(flag) {
        if (this.$linkCount > 1) {
            if (_.notNull(flag)) {
                this.$state.expanded = flag && true;
            }else{
                this.$state.expanded=!this.$state.expanded;
            }
        }else{
            this.$state.expanded = false;
        }
        return this;
    }

    getPath() {
        const path = [];
        if (!this.$state.isLoop) {
            const [startPoint, endPoint]=super.getTerminals();
            if (startPoint && endPoint) {
                if (this.$state.expanded) {
                    for (let i = 0; i < this.$linkCount; i++) {
                        path.push(DirectLink.getDirectPathWidthLineGap(startPoint, endPoint, this.$linkCount, i, this.$style.lineSegment, this.$style.lineGap));
                    }
                } else {
                    path.push(startPoint, endPoint);
                }
            }
        }
        return path;
    };

    isInStage() {
        if (!this.$state.isLoop && this.$state.expanded) {
            if (this.$path.length > 0) {
                if (this.$path.every(element => element.viewAble())) {
                    return this.$path.some(element => element.isInStage()) || this.getPath().some(line=>Link.interWithRect(line[1], line[2], this.$scene.getStageBoundary()) != null);
                }
            }
            return false;
        }
        return super.isInStage();
    }

    isInBoundary(point) {
        if (!this.$state.isLoop && this.$state.expanded) {
            return this.getPath().some(line=> MathPath.isOnPath(point, line, this.$style.lineWidth));
        }
        return super.isInBoundary(point);
    }

    $paintLink(context, path) {
        if (this.$state.expanded) {
            return this.$paintExpend(context, path);
        }
        return super.$paintLink(context, path);
    }

    $paintExpend(context, path) {
        if (path.length >= 2) {
            context.strokeStyle = "rgba(" + this.$style.color + "," + this.$style.alpha + ")";
            context.lineWidth = this.$style.lineWidth;
            if (!_.isIOS) {
                context.setLineDash(this.$style.lineDash);
            }
            path.forEach((line, i)=> {
                if (this.$style.colors && this.$style.colors[i]) {
                    context.strokeStyle = "rgba(" + this.$style.colors[i] + "," + this.$style.alpha + ")";
                } else {
                    context.strokeStyle = "rgba(" + this.$style.color + "," + this.$style.alpha + ")";
                }
                context.beginPath();
                context._path(line, this.$style.lineRadius);
                context.stroke();
                this.$paintArrow(context, line);
            });
        }
        return this;
    }

    $paintPathText(context, path) {
        if (this.$state.expanded) {
            if (path.length > 0) {
                path = [path[0][0], path[0][path[0].length - 1]];
            }
        }
        return super.$paintPathText(context, path);

    }
}
export {DirectLink}
