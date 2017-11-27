import { MathLine } from "../math/line";
import { MathPath } from "../math/path";
import { Box, _ } from "../common";
import { Style } from "../common/style";

class Path extends Box {
    constructor() {
        super();
        Object.assign(this, {
            $path: [],
            _currentPoint: null,
            _currentLine: null
        });
        this.$style = Object.create(Style.Path);
    }

    transPoint(point = [0, 0], flag) {
        if (flag) {
            return [
                Number(point[0]) + this.$position[0],
                Number(point[1]) + this.$position[1]
            ];
        } else {
            return [
                Number(point[0]) - this.$position[0],
                Number(point[1]) - this.$position[1]
            ];
        }
    }

    newLine(style = {}) {
        this._currentLine = {
            data: [],
            style: _.extend(Object.create(this.$style), style)
        };
        this.$path.push(this._currentLine);
        return this;
    }

    moveTo(point = this.$position) {
        if (this._currentLine == null) {
            this.newLine();
        }
        this._currentPoint = this.transPoint(point);
        return this;
    }

    lineTo(point, style = {}) {
        point = this.transPoint(point);
        if (this._currentPoint == null) {
            this.moveTo();
        }
        if (this._currentLine.data.length == 0 || this._currentPoint !== this._currentLine.data[this._currentLine.data.length - 1]) {
            this._currentLine.data.push(this._currentPoint);
        }
        this._currentLine.data.push(point);
        this._currentPoint = point;
        return this;
    }

    removeLast() {
        if (this.$path.length > 0) {
            if (this._currentLine == null) {
                this._currentLine = this.$path[this.$path.length - 1];
            }
            const current = this._currentLine.data;
            if (current.length > 0) {
                current.length -= 1;
                if (current.length < 2) {
                    return this.removeLastLine();
                } else {
                    this._currentPoint = this._currentLine[this._currentLine.length - 1];
                }
            }

        } else {
            this._currentPoint = null;
            this._currentLine = null;
        }
        return this;
    }


    removeLastLine() {
        if (this.$path.length > 0) {
            do {
                this.$path.length -= 1;
                if (this.$path.length > 0) {
                    this._currentLine = this.$path[this.$path.length - 1];
                } else {
                    this._currentLine = null;
                    this._currentPoint = null;
                }
            }
            while (this._currentLine != null && this._currentLine.data.length < 2)

            if (this._currentLine != null) {
                this._currentPoint = this._currentLine.data[this._currentLine.data.length - 1];
            }
        }
        return this;
    }

    path(path) {
        this.$path = path;
    }

    getPath() {
        return this.$path.map(line => ({
            data: line.data.map(point => this.transPoint(point, true)),
            style: line.style
        }));
    }

    getBoundary() {
        let left = Number.MAX_VALUE,
            right = Number.MIN_VALUE,
            top = Number.MAX_VALUE,
            bottom = Number.MIN_VALUE,
            width, height;

        this.$path.forEach(line => line.data.forEach(point => {
            left = Math.min(point[0], left);

            right = Math.max(point[0], right);

            top = Math.min(point[1], top);

            bottom = Math.max(point[1], bottom);

        }));
        this.$style.size[0] = width = right - left;
        this.$style.size[1] = height = bottom - top;
        return {
            left: this.$position[0] - this.$style.borderWidth,
            top: this.$position[1] - this.$style.borderWidth,
            right: this.$position[0] + width + this.$style.borderWidth,
            bottom: this.$position[1] + height + this.$style.borderWidth,
            width: width + this.$style.borderWidth * 2,
            height: height + this.$style.borderWidth * 2
        }
    }

    isInBoundary(point) {
        point = this.transPoint(point);
        let shadow, line, style;
        for (let i = 0; i < this.$path.length; i++) {
            line = this.$path[i].data;
            style = this.$path[i].style;
            for (let j = 1; j < line.length; j++) {
                shadow = MathLine.shadowOnLine(point, line[j - 1], line[j]);
                if ((MathLine.lengthBetween(point, shadow) <= style.lineWidth / 2) && MathLine.isOnLine(shadow, line[j - 1], line[j])) {
                    return true;
                }
            }
        }
        return false;
    }

    toJson() {
        const json = super.toJson();
        json.api.path = this.$path;
        return json;
    }

    $paintBox(context) {
        const boundary = this.getBoundary();
        this.$path.forEach(path => {

            context.beginPath();

            context.lineWidth = path.style.lineWidth;
            context.strokeStyle = "rgba(" + path.style.color + "," + this.$style.alpha + ")";
            if (!_.isIOS) {
                context.setLineDash(path.style.lineDash);
            }
            context._path(path.data, path.style.lineRadius);

            context.stroke();

        });
        return this;
    }

    $paintBorder(context, boundary) {
        if (this.$style.borderWidth != 0) {
            this.$style.borderWidth = 0;
        }
        return this;
    }

    $paintText(context, boundary) {
        context.save();
        context.translate(boundary.width / 2, boundary.height / 2);
        super.$paintText(context, boundary);
        context.restore();
        return this;
    }
}
export { Path }
_.isPath = obj => obj instanceof Path;