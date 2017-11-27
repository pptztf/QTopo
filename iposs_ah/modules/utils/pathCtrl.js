
export default scene => {
    const path = [];
    let temp, control;
    scene.data("layer_path", path);
    return {
        go() {
            let id = scene.data("pid");
            if (!path.includes(id)) {
                path.push(id);
                temp = id;
                control = true;
                scene.data("go_back", true);
            } else {
                control = null;
            }
        },
        back() {
            if (path.length > 0) {
                control = false;
                temp = path.pop();
                if (path.length == 0) {
                    scene.data("go_back", false);
                }
                return temp;
            } else {
                control = null;
            }
        },
        return() {
            if (control == true) {
                path.pop();
                control = null;
            } else if (control == false) {
                path.push(temp);
                control = null;
            }
            if (path.length == 0) {
                scene.data("go_back", false);
            } else {
                scene.data("go_back", true);
            }
        }
    }
};