const MathLine = {

    atan(lineS, lineE) {
        return Math.atan2(lineE[1] - lineS[1], lineE[0] - lineS[0]);
    },

    slope(lineS, lineE) {
        return (lineE[1] - lineS[1]) / (lineE[0] - lineS[0]);
    },

    constant(lineS, lineE) {
        return MathLine.constantBySlope(lineS, MathLine.slope(lineS, lineE));
    },

    constantBySlope(point, slope) {
        return point[1] - slope * point[0];
    },

    distanceSquare(pointA, pointB) {
        return Math.pow(pointB[1] - pointA[1], 2) + Math.pow(pointB[0] - pointA[0], 2);
    },

    lengthBetween(pointA, pointB) {
        return Math.sqrt(MathLine.distanceSquare(pointA, pointB));
    },

    reduced(length, lineS, lineE) {
        const angle = MathLine.atan(lineS, lineE);
        return [
            lineE[0] - length * Math.cos(angle),
            lineE[1] - length * Math.sin(angle)
        ];
    },

    lineInter(aLineS, aLineE, bLineS, bLineE) {

        // 三角形aLineS-aLineE-bLineS 面积的2倍
        const area_abc = (aLineS[0] - bLineS[0]) * (aLineE[1] - bLineS[1]) - (aLineS[1] - bLineS[1]) * (aLineE[0] - bLineS[0]),

            // 三角形aLineS-aLineE-bLineE 面积的2倍
            area_abd = (aLineS[0] - bLineE[0]) * (aLineE[1] - bLineE[1]) - (aLineS[1] - bLineE[1]) * (aLineE[0] - bLineE[0]);

        // 面积符号相同则两点在线段同侧,不相交 (对点在线段上的情况,本例当作不相交处理);
        if (area_abc * area_abd > 0) {
            return null;
        }

        // 三角形bLineS-aLineE-aLineS 面积的2倍
        const area_cda = (bLineS[0] - aLineS[0]) * (bLineE[1] - aLineS[1]) - (bLineS[1] - aLineS[1]) * (bLineE[0] - aLineS[0]),
            // 三角形bLineS-bLineE-aLineE 面积的2倍
            // 注意: 这里有一个小优化.不需要再用公式计算面积,而是通过已知的三个面积加减得出.
            area_cdb = area_cda + area_abc - area_abd;
        if (area_cda * area_cdb > 0) {
            return null;
        }

        //计算交点坐标
        const t = area_cda / (area_abd - area_abc),
            dx = t * (aLineE[0] - aLineS[0]),
            dy = t * (aLineE[1] - aLineS[1]);
        return [aLineS[0] + dx, aLineS[1] + dy];

    },

    shadowOnLine(point, lineS, lineE) {
        const slope = MathLine.slope(lineS, lineE),
            constant = lineS[1] - slope * lineS[0];
        let resultX, resultY;
        switch (slope) {
            case 0:
                resultX = point[0];
                resultY = lineS[1];
                break;
            case Infinity:
            case -Infinity:
                resultX = lineS[0];
                resultY = point[1];
                break;
            default:
                resultX = (point[1] + (point[0] / slope) - constant) / ((1 / slope) + slope);
                resultY = slope * resultX + constant;
        }
        return [resultX, resultY];
    },

    //线上一点的垂直线与相距distance的平行线的交点
    verticalInterParallel(point, lineS, lineE, distance = 0) {
        if (distance !== 0) {
            const angle = MathLine.slope(lineS, lineE);
            switch (angle) {
                case 0:
                    distance = lineS[0] < lineE[0] ? -distance : distance;
                    return [point[0], point[1] + distance];
                case Infinity:
                case -Infinity:
                    distance = lineS[1] < lineE[1] ? distance : -distance;
                    return [point[0] + distance, point[1]];
                default:
                    distance = lineS[0] < lineE[0] ? distance : -distance;
                    const lineConstant = MathLine.constantBySlope(lineS, angle),
                        disLineConstant = MathLine.constantBySlope(point, -1 / angle),
                        reX = (disLineConstant - lineConstant + distance * (Math.sqrt(Math.pow(angle, 2) + 1))) / (angle + 1 / angle),
                        reY = -1 / angle * reX + disLineConstant;
                    return [reX, reY];
            }
        }
        return point;
    },

    percentOnLine(percent, lineS, lineE) {
        return [
            Math.floor((lineE[0] - lineS[0]) * percent + lineS[0]),
            Math.floor((lineE[1] - lineS[1]) * percent + lineS[1])
        ]
    },

    quadraticAt(start, middle, end, time) {
        let onet = 1 - time;
        return [
            onet * (onet * start[0] + 2 * time * middle[0]) + time * time * end[0],
            onet * (onet * start[1] + 2 * time * middle[1]) + time * time * end[1]
        ];
    },

    //求二次贝塞尔曲线上的投影点
    shadowOnQuadratic(point, start, middle, end) {
        let t,
            interval = 0.005,
            d = Infinity,
            shadow = null;

        for (let _t = 0; _t < 1; _t += 0.05) {
            let dis = MathLine.distanceSquare(
                point,
                MathLine.quadraticAt(start, middle, end, _t)
            );
            if (dis < d) {
                t = _t;
                d = dis;
            }
        }
        d = Infinity;

        for (var i = 0; i < 32; i++) {
            let prev = t - interval,
                next = t + interval,
                temp = MathLine.quadraticAt(start, middle, end, prev),
                dis = MathLine.distanceSquare(point, temp);

            if (prev >= 0 && dis < d) {
                t = prev;
                d = dis;
                shadow = temp;
            }
            else {
                temp = MathLine.quadraticAt(start, middle, end, next);
                let dis2 = MathLine.distanceSquare(point, temp);
                if (next <= 1 && dis2 < d) {
                    t = next;
                    d = dis2;
                    shadow = temp;
                }
                else {
                    interval *= 0.5;
                }
            }
        }
        return shadow;
    },

    isOnLine(point, lineS, lineE) {
        return (MathLine.lengthBetween(point, lineS) + MathLine.lengthBetween(point, lineE) - MathLine.lengthBetween(lineS, lineE)) <= 1e-6;
    }

}
export { MathLine }