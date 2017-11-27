/**
 * 绘制园角矩形
 * @param x {number}左上角坐标点x
 * @param y {number}左上角坐标点y
 * @param width {number}矩形宽度
 * @param height {number}矩形高度
 * @param borderRadius {number}圆角弧度
 */
CanvasRenderingContext2D.prototype._roundRect = function (x, y, width, height, borderRadius = 5) {
    //元素圆角
    this.moveTo(x + borderRadius, y);
    this.lineTo(x + width - borderRadius, y);
    this.arcTo(x + width, y, x + width, y + borderRadius, borderRadius);
    this.lineTo(x + width, y + height - borderRadius);
    this.arcTo(x + width, y + height, x + width - borderRadius, y + height, borderRadius);
    this.lineTo(x + borderRadius, y + height);
    this.arcTo(x, y + height, x, y + height - borderRadius, borderRadius);
    this.lineTo(x, y + borderRadius);
    this.arcTo(x, y, x + borderRadius, y, borderRadius);
};
/**
 * 绘制椭圆
 * @param x {number}圆心坐标x
 * @param y {number}圆心坐标y
 * @param width {number}椭圆宽度
 * @param height {number}椭圆高度
 */
CanvasRenderingContext2D.prototype._ellipse = function (x, y, width, height) {
    const radiusX = width / 0.75 / 2,
        radiusY = height / 2;
    this.moveTo(x, y - radiusY);
    this.bezierCurveTo(x + radiusX, y - radiusY, x + radiusX, y + radiusY, x, y + radiusY);//右半边
    this.bezierCurveTo(x - radiusX, y + radiusY, x - radiusX, y - radiusY, x, y - radiusY);//左半边
};
/**
 * 画五角星
 * @param x {number}圆心坐标x
 * @param y {number}圆心坐标y
 * @param radius {number}五角星外半径
 * @private
 */
CanvasRenderingContext2D.prototype._star = function (x, y, radius) {
    const innerRadius = radius * 0.4;
    //从顶点开始绘制路径
    for (let i = 0; i < 5; i++) {
        this.lineTo(
            Math.cos((18 + i * 72) / 180 * Math.PI) * radius + x,
            -Math.sin((18 + i * 72) / 180 * Math.PI) * radius + y
        );
        this.lineTo(
            Math.cos((54 + i * 72) / 180 * Math.PI) * innerRadius + x,
            -Math.sin((54 + i * 72) / 180 * Math.PI) * innerRadius + y
        );
    }
};
CanvasRenderingContext2D.prototype._triangle= function (x,y,  width, height) {
    this.moveTo(x,y-height/2);
    this.lineTo(x+width/2,y+height/2);
    this.lineTo(x-width/2,y+height/2);
};
/**
 * 画线或链路的箭头
 * @param sx
 * @param sy
 * @param ex
 * @param ey
 * @param radius
 * @param offset
 * @param type
 */
CanvasRenderingContext2D.prototype._arrow = function ([sx, sy], [ex, ey], radius, offset, type) {
    this.beginPath();
    const atanAngle = Math.atan2(ey - sy, ex - sx),
        width = ex - sx,
        height = ey - sy,
        length = Math.sqrt(width * width + height * height) - radius,
        COS = sx + (length + offset) * Math.cos(atanAngle),
        SIN = sy + (length + offset) * Math.sin(atanAngle);
    this.moveTo(COS + (radius / 2) * Math.cos(atanAngle - Math.PI * 0.5), SIN + (radius / 2) * Math.sin(atanAngle - Math.PI * 0.5));
    this.lineTo(ex + offset * Math.cos(atanAngle), ey + offset * Math.sin(atanAngle));
    this.lineTo(COS + (radius / 2) * Math.cos(atanAngle - Math.PI * 1.5), SIN + (radius / 2) * Math.sin(atanAngle - Math.PI * 1.5));
    if (type) {
        this.fill();
    } else {
        this.stroke();
    }
};

CanvasRenderingContext2D.prototype._path=function(path, radius) {
    this.moveTo(...path[0]);
    for (var i = 1; i < path.length; i++) {
        if (radius > 0) {
            if (i < path.length - 1) {
                this.arcTo(...path[i], ...path[i + 1], radius);//增加折线弧度
            } else {
                this.lineTo(...path[i]);
            }
        } else {
            this.lineTo(...path[i]);
        }
    }
};