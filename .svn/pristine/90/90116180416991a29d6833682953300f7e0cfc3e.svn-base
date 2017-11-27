import { _ } from "./util";
import { EventCtrl } from "./EventCtrl";

class Base extends EventCtrl {
    constructor() {
        super();
        Object.assign(this, {
            $id: _.makeId(),
            $state: {},
            $data: {},
            $style: {}
        });
    }

    id(id) {
        if (_.notNull(id)) {
            this.$id = id;
            return this;
        }
        return this.$id;
    }

    data(...arr) {
        switch (arr.length) {
            case 0:
                return this.$data;
            case 1:
                if (_.isObject(arr[0])) {
                    Object.defineProperties(this.$data, Object.getOwnPropertyDescriptors(arr[0]));
                    return this;
                }
                return this.$data[arr[0]];
            case 2:
                this.$data[arr[0]] = arr[1];
                return this;
            default:
                return arr.map(key => this.$data[key]);
        }
    }

    state(config) {
        if (_.notNull(config)) {
            Object.defineProperties(this.$state, Object.getOwnPropertyDescriptors(config));
            return this;
        }
        return this.$state;
    }

    style(config) {
        if (_.notNull(config)) {
            Object.defineProperties(this.$style, Object.getOwnPropertyDescriptors(config));
            return this;
        }
        return this.$style;
    }

    get(key) {
        if (_.notNull(this.$data[key])) {
            return this.$data[key];
        }
        if (_.notNull(this.$state[key])) {
            return this.$state[key];
        }
        if (_.notNull(this.$style[key])) {
            return this.$style[key];
        }
        return this[key];
    }

    set(config = {}) {
        const { api, state, data, style } = config;
        this.style(style);
        this.state(state);
        this.data(data);
        _.each(api, (value, key) => {
            if (_.isFunction(this[key])) {
                if (_.isArray(value)) {
                    this[key](...value);
                }else{
                    this[key](value);
                }
            }
        });
        return this;
    }

    toJson() {
        return {
            type: this.constructor.name,
            api: {
                id: this.$id
            },
            state: Object.assign({}, this.$state),
            data: Object.assign({}, this.$data),
            style: Object.assign({}, this.$style)
        }
    }
}
export { Base }