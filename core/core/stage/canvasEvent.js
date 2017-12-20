import { _ } from "../common";
export let bindCanvas = function (stage, canvas) {
    var TOUCH_CLICK_DELAY = 300,
        _lastTouchMoment,
        _clickTimes = 0;;
    document.oncontextmenu = function () {
        return !1;
    };
    const notWebKit = !window.addEventListener;
    if (notWebKit) {
        canvas.attachEvent("onmouseout", mouseOut);
        canvas.attachEvent("onmouseover", mouseOver);
        canvas.attachEvent("onmousedown", mouseDown);
        canvas.attachEvent("onmouseup", mouseUp);
        canvas.attachEvent("onmousemove", mouseMove);
        canvas.attachEvent("onclick", click);
        canvas.attachEvent("ondblclick", dblClick);
        canvas.attachEvent("onmousewheel", mouseWheel);
    } else {
        canvas.addEventListener("mouseout", mouseOut);
        canvas.addEventListener("mouseover", mouseOver);
        canvas.addEventListener("mousedown", mouseDown);
        canvas.addEventListener("mouseup", mouseUp);
        canvas.addEventListener("mousemove", mouseMove);
        canvas.addEventListener("click", click);
        canvas.addEventListener("dblclick", dblClick);
        canvas.addEventListener("touchstart", touchStart);
        canvas.addEventListener("touchmove", touchMove);
        canvas.addEventListener("touchend", touchEnd);
        if (_.isFirefox) {
            canvas.addEventListener("DOMMouseScroll", mouseWheel);
        } else {
            canvas.addEventListener("mousewheel", mouseWheel);
        }
    }
    if (!notWebKit) {
        window.addEventListener("keydown", function (event) {
            stage.trigger("keydown", _.cloneEvent(event));
            const keyCode = event.keyCode;
            if (37 == keyCode || 38 == keyCode || 39 == keyCode || 40 == keyCode) {
                if (event.preventDefault) {
                    event.preventDefault()
                } else {
                    event = event || window.event;
                    event.returnValue = !1;
                }
            }
        }, true);
        window.addEventListener("keyup", function (event) {
            stage.trigger("keyup", _.cloneEvent(event));
            const keyCode = event.keyCode;
            if (37 == keyCode || 38 == keyCode || 39 == keyCode || 40 == keyCode) {
                if (event.preventDefault) {
                    event.preventDefault()
                } else {
                    event = event || window.event;
                    event.returnValue = !1;
                }
            }
        }, true);
    }
    return function () {
        if (notWebKit) {
            canvas.detachEvent("onmouseout", mouseOut);
            canvas.detachEvent("onmouseover", mouseOver);
            canvas.detachEvent("onmousedown", mouseDown);
            canvas.detachEvent("onmouseup", mouseUp);
            canvas.detachEvent("onmousemove", mouseMove);
            canvas.detachEvent("onclick", click);
            canvas.detachEvent("ondblclick", dblClick);
            canvas.detachEvent("onmousewheel", mouseWheel);
        } else {
            canvas.removeEventListener("mouseout", mouseOut);
            canvas.removeEventListener("mouseover", mouseOver);
            canvas.removeEventListener("mousedown", mouseDown);
            canvas.removeEventListener("mouseup", mouseUp);
            canvas.removeEventListener("mousemove", mouseMove);
            canvas.removeEventListener("click", click);
            canvas.removeEventListener("dblclick", dblClick);
            if (_.isFirefox) {
                canvas.removeEventListener("DOMMouseScroll", mouseWheel);
            } else {
                canvas.removeEventListener("mousewheel", mouseWheel);
            }
        }
    }


    function mouseOver(event) {
        event = getEventObject(event);
        stage.trigger("mouseover", event);
        stage.triggerScenes("mouseover", event);
    }

    function mouseOut(event) {
        event = getEventObject(event);
        stage.trigger("mouseout", event);
        stage.triggerScenes("mouseout", event);
    }

    function mouseDown(event) {
        event = getEventObject(event);
        stage.$mouseDownPoint = [event.x, event.y];
        stage.$mouseDown = true;
        stage.trigger("mousedown", event);
        stage.triggerScenes("mousedown", event);
    }

    function mouseUp(event) {
        event = getEventObject(event);
        stage.$mouseDown = false;
        stage.trigger("mouseup", event);
        stage.triggerScenes("mouseup", event);
        stage.$dynamic.start();
    }

    function mouseMove(event) {
        event = getEventObject(event);
        if (stage.$mouseDown) {
            stage.$dynamic.stop();
            const [mouseDownX, mouseDownY] = stage.$mouseDownPoint;
            event.dragWidth = event.x - mouseDownX;
            event.dragHeight = event.y - mouseDownY;
            stage.trigger("mousedrag", event);
            stage.triggerScenes("mousedrag", event);
        } else {
            stage.trigger("mousemove", event);
            stage.triggerScenes("mousemove", event);
        }
    }

    function click(event) {
        event = getEventObject(event);
        stage.trigger("click", event);
        stage.triggerScenes("click", event);
    }

    function dblClick(event) {
        event = getEventObject(event);
        stage.trigger("dblclick", event);
        stage.triggerScenes("dblclick", event);
    }

    function mouseWheel(e) {
        const event = getEventObject(e);
        stage.trigger("mousewheel", event);
        stage.triggerScenes("mousewheel", event);
        if (e.preventDefault) {
            e.preventDefault()
        } else {
            e = e || window.event;
            e.returnValue = !1;
        }
        if ((null == e.wheelDelta ? -e.detail : e.wheelDelta) < 0) {
            if (e.ctrlKey) {
                stage._zoomByPoint(-0.8, event);
            } else {
                stage.zoom(-0.8);
            }
        } else {
            if (e.ctrlKey) {
                stage._zoomByPoint(0.8, event);
            } else {
                stage.zoom(0.8);
            }
        }
    }

    function touchStart(e) {
        // console.info('touchstart', e);
        e = getEventObjectOnPhone(e);
        _lastTouchMoment = new Date();
        mouseDown(e);
    }
    function touchEnd(e) {
        // console.info('touchend', e);
        e = getEventObjectOnPhone(e);
        mouseUp(e);
        var timeGap = +new Date() - _lastTouchMoment;
        if (timeGap < TOUCH_CLICK_DELAY) {
            console.info('click', timeGap);
            click(e);
            _clickTimes++;
            if (_clickTimes > 1) {
                dblClick(e);
                console.info('dblClick');
                _clickTimes = 0;
            }
        } else {
            _clickTimes = 0;
        }
    }
    function touchMove(e) {
        e = getEventObjectOnPhone(e);
        mouseMove(e);
    }

    function getEventObjectOnPhone(e) {
        e.stopPropagation();
        return e.type != 'touchend'
            ? e.targetTouches[0]
            : e.changedTouches[0];
    }
    function getEventObject(event) {
        const e = _.cloneEvent(event);
        let sceneX = 0, sceneY = 0;
        e.target = stage.$current;
        if (_.isFirefox && e.layerX != null && e.layerX !== e.offsetX) {
            sceneX = e.layerX;
            sceneY = e.layerY;
        }
        else if (e.offsetX != null) {
            sceneX = e.offsetX;
            sceneY = e.offsetY;
        }
        else {
            if (canvas.getBoundingClientRect) {
                const box = canvas.getBoundingClientRect();
                sceneX = e.clientX - box.left;
                sceneY = e.clientY - box.top;
            } else {
                sceneX = e.clientX;
                sceneY = e.clientY;
            }
        }
        e.x = sceneX;
        e.y = sceneY;
        return e;
    }

    function getBoundingClientRect(el) {
        // BlackBerry 5, iOS 3 (original iPhone) don't have getBoundingRect
        return el.getBoundingClientRect ? el.getBoundingClientRect() : { left: 0, top: 0 };
    }

};