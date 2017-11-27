import { MathLine } from "./line";
const MathPath = {

    /**
     * 判断点是否在路径上
     */
    isOnPath(point, path, lineWidth = 1) {
        let shadow;
        for (let i = 1; i < path.length; i++) {
            shadow = MathLine.shadowOnLine(point, path[i - 1], path[i]);
            if ((MathLine.lengthBetween(point, shadow) <= lineWidth / 2) && MathLine.isOnLine(shadow, path[i - 1], path[i])) {
                return true;
            }
        }
        return false;
    },

    /**
     * 遍历获取路径总长度
     */
    totalLength(path) {
        let [total, pre, distance] = [0, path[0]];
        for (let i = 1; i < path.length; i++) {
            distance = MathLine.lengthBetween(pre, path[i]);
            total += distance;
            pre = path[i];
        }
        return Math.floor(total);
    },

    /**
     * 根据长度/或百分比(0-1)获取路径上的点
     */
    pointOnPath(part, path, totalLength = MathPath.totalLength(path)) {
        let length;
        if (part > 0 && part < 1) {
            length = totalLength * part;
        } else {
            length = part;
        }
        let pre = path[0], angle, percent, distance, resultX, resultY, x1, y1, x2, y2;
        for (let i = 1; i < path.length; i++) {
            distance = MathLine.lengthBetween(pre, path[i]);
            if (length < distance) {
                return {
                    point: MathLine.percentOnLine(length / distance, pre, path[i]),
                    angle: Math.atan(MathLine.slope(pre, path[i]))
                }
            } else {
                length -= distance;
                pre = path[i];
            }
        }
        return {
            point: path[0],
            angle
        };
    }
}
export { MathPath }