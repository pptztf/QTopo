import { _ } from "../common";
import { MathLine } from "../math/line";
import { Link } from "./Link";
import {Style} from "../common/style";

class FoldLink extends Link {

    constructor() {
        super();
        Object.assign(this.$state, {
            expanded: false
        });
        this.$style = Object.create(Style.FoldLink);
    }

    getPath() {
        const path = [];
        if (!this.$state.isLoop) {
            const [startPoint, endPoint] = super.getTerminals();

            if (startPoint && endPoint) {
                path.push(startPoint);
                if (_.isArray(this.$style.foldPoints) && this.$style.foldPoints.length > 0) {
                    this.$style.foldPoints.forEach(p =>
                        p.length >= 2 && path.push(
                            MathLine.verticalInterParallel(
                                MathLine.percentOnLine(_.percent(p[0]), startPoint, endPoint),
                                startPoint, endPoint,
                                p[1]
                            )
                        )
                    );
                } else if (_.isNumeric(this.$style.foldPoints)) {
                    let dis = MathLine.lengthBetween(startPoint, endPoint) / (2 * this.$style.foldPoints);
                    dis = this.$style.foldReserve ? -dis : dis;
                    for (let i = 1; i <= this.$style.foldPoints; i++) {
                        path.push(
                            MathLine.verticalInterParallel(
                                MathLine.percentOnLine((2 * i - 1) / (2 * this.$style.foldPoints), startPoint, endPoint),
                                startPoint, endPoint,
                                dis
                            )
                        );
                        dis = -dis;
                    }
                }
                path.push(endPoint);
            }
        }
        return path;
    };
}
export { FoldLink }
