const _ = QTopo.util;
export const initFactory = iposs => {

    iposs.useUrlHash = true;//关闭ajax后缀附加hash值

    const { url, scene } = iposs;

    iposs.factory = {
        index, goDown, goBack, goTo, refresh, alarm, location,
        save, savePosition, search, vendorList, userGather,
        deviceIp, deviceMode, deviceMode_withoutOs,
        resourceList, linkCount, addGroup, addDevice,
        addSegment, addLink, remove, editNode,modifyElements, manage,
        cancelManage, copy, cut_paste, out_group, in_group, searchGoTo
    };

    $.ajaxSetup({
        catch: false,
        complete: () => iposs.loading.close(),
        beforeSend: () => iposs.loading.open()
    });

    function index() {
        iposs.progress(10, "执行首绘");
        return httpCtl(url.index).then(data => {
            iposs.progress(50, "正在绘制!");
            return data;
        });
    }

    function goDown(pid) {
        iposs.progress(10, "进入下一层");
        return httpCtl({
            url: url.go_down,
            data: {
                pid
            }
        }).then(data => {
            iposs.progress(50, "正在绘制!");
            return data;
        })
    }

    function goBack(pid) {
        iposs.progress(10, "返回上一层");
        return httpCtl({
            url: url.go_back,
            data: {
                pid
            }
        }).then(data => {
            iposs.progress(50, "正在绘制!");
            return data;
        })
    }

    function goTo(pid) {
        iposs.progress(10, "跳入目标层");
        return httpCtl({
            url: url.go_to,
            data: {
                pid
            }
        }).then(data => {
            iposs.progress(50, "正在绘制!");
            return data;
        })
    }

    function refresh(pid) {
        iposs.progress(10, "刷新当前层");
        return httpCtl({
            url: url.refresh,
            data: {
                pid
            }
        }).then(data => {
            iposs.progress(50, "正在绘制!");
            return data;
        })
    }

    function alarm() {
        if (_.notNull(url.alarm)) {
            iposs.progress(70, "读取告警");
            return httpCtl({
                url: url.alarm,
                data: {
                    objIdArray: scene.map(node => node.data('id'), "node").join(",")
                }
            }).then(data => {
                console.info("alarm", data);
                iposs.progress(100, "绘制完成");
                return data;
            })
        }
        iposs.progress(100, "绘制完成");
    }

    function location() {
        return httpCtl({
            url: url.get_path,
            data: {
                objId: scene.data("pid")
            },
            _text: true
        });
    }

    function save() {
        return httpCtl({
            url: url.save,
            _text: true
        }, e => e==0);
    }

    function savePosition() {
        let movedObjs = `default-topo;${scene.data("pid")};`;
        if (scene.data("moved").size > 0) {
            let moved = "";
            scene.data("moved")
                .forEach(node => moved +=
                    (node.data("id") + "," + node.position().map((e, i)=>Math.floor(e - scene.data("offset")[i])).join(",") + "@"));
            movedObjs += moved.substr(0, moved.length - 1);
            return httpCtl({
                url: url.moved,
                data: {
                    movedObjs
                },
                _text: true
            }).then(e => scene.data("moved").clear());
        }
        return Promise.resolve();
    }

    function search(value, type) {
        return httpCtl({
            url: url.search,
            data: {
                searchValue: value,
                searchType: type
            }
        });
    }

    function searchGoTo(id) {
        iposs.progress(10, "跳入目标层");
        return httpCtl({
            url: url.search_go_to,
            data: {
                id
            }
        }).then(data => {
            iposs.progress(50, "正在绘制!");
            return data;
        })
    }

    function vendorList(select, defaultselect = -1) {
        return httpCtl(url.get_vendorList)
            .then(data => {
                data.forEach(option => {
                        if (option.vendorId == defaultselect) {
                            select.append(`<option value=${option.vendorId} selected>${option.descr}</option>`);
                            select.trigger('change');
                        } else {
                            select.append(`<option value=${option.vendorId}>${option.descr}</option>`);
                        }

                    }
                );
            });
    }

    function userGather(select) {
        return httpCtl(url.get_userGather)
            .then(data => data.forEach(option => select.append(`<option value=${option.gatherId}>${option.descr}</option>`)));
    }

    function deviceIp(ip) {
        return httpCtl({
            url: url.get_deviceIp,
            data: {
                id: ip
            },
            _text: true
        });
    }

    function deviceMode(select, id, defaultselect = -1) {
        return httpCtl({
            url: url.get_deviceMode,
            data: {
                vendorId: id
            }
        }).then(data => {
            data.forEach(option => {
                if (option.serial == defaultselect) {
                    select.append(`<option value=${option.serial} selected>${option.descr}</option>`)
                } else {
                    select.append(`<option value=${option.serial}>${option.descr}</option>`)
                }
            });
        })
    }

    function deviceMode_withoutOs(select, id) {
        return httpCtl({
            url: url.get_deviceMode_withoutOs,
            data: {
                vendor_id: id
            }
        }).then(data => data.forEach(option => select.append(`<option value=${option.device_name}>${option.device_name}</option>`)))
    }

    function resourceList(select) {
        httpCtl(url.get_resList)
            .then(data => data.forEach(option => select.append(`<option value=${option.resourceTypeId}>${option.descr}</option>`)));
    }

    function linkCount(id) {
        return httpCtl({
            url: url.get_linkCount,
            data: {
                linkId: id
            }
        }).then(data => _.reduce(data, (value, name) => name + " : " + value + "</br>"));
    }

    function addGroup(data) {
        return httpCtl({
            url: url.add_group,
            data
        });
    }

    function addDevice(data) {
        return httpCtl({
            url: url.add_device,
            data
        }, e => e == 1);
    }

    function addSegment(data) {
        return httpCtl({
            url: url.add_segment,
            data
        }, e =>e == 1);
    }

    function addLink(fromId, toId) {
        return httpCtl({
            url: url.add_link,
            data: {
                pid: scene.data("pid"),
                //linkId: fromId + "" + toId + "1/0",
                visible: '1',
                zindex: '1',
                fromId: fromId,
                toId: toId
            },
            _text: true
        }, e => _.notNull(e));
    }

    function remove(ids) {
        return httpCtl({
            url: url.remove,
            data: {
                objids: ids.join(",")
            }
        }, e => e == 1);
    }

    function editNode(data) {
        return httpCtl({
            url: url.edit_node,
            data
        }, e => e == 1);
    }
    function modifyElements(data) {
        return httpCtl({
            url: url.modifyelements,
            data
        }, e => e == 1);
    }
    function manage(id) {
        return httpCtl({
            url: url.manage,
            data: {
                //type: 2,
                objids: id,
                isVisible: 1
            }
        }, e => e == 1)
    }

    function cancelManage(id) {
        return httpCtl({
            url: url.manage,
            data: {
                //type: 2,
                objids: id,
                isVisible: 0
            }
        }, e => e == 1);
    }

    function copy(ids, position) {
        return httpCtl({
            url: url.copy,
            data: {
                objids: ids.join(","),
                pid: scene.data("pid"),
                x: position[0],
                y: position[1]
            }
        }, e => e == 1);
    }

    function cut_paste(ids, position) {
        return httpCtl({
            url: url.cut_paste,
            data: {
                objids: ids.join(","),
                pid: scene.data("pid"),
                vid: '1',
                x: position[0],
                y: position[1]
            }
        }, e => e == 1);
    }

    function out_group(data) {
        return httpCtl({
            url: url.out_group,
            data
        }, e => e == 1);
    }

    function in_group(data) {
        return httpCtl({
            url: url.in_group,
            data
        }, e => e == 1);
    }

    function httpCtl(option, judge) {
        if (iposs.useUrlHash) {
            option = _.addUrlHash(option);
        }
        return new Promise((resolve, reject) => {
            $.ajax(option)
                .done(data => {
                    try {
                        if (!option._text) {
                            data = _.toJson(data);
                        }
                        if (_.notNull(judge)) {
                            if (judge(data)) {
                                iposs.alert("操作成功!");
                                resolve(data);
                                iposs.events.TopoEvent_REFRESH();
                            } else {
                                iposs.alert("操作失败!");
                                reject(data);
                            }
                        } else {
                            resolve(data);
                        }
                    } catch (e) {
                        error(e, reject);
                    }
                })
                .fail(e => error(e, reject));
        });
    }

    function error(e, reject) {
        iposs.alert("操作失败!登录后再试！");
        iposs.closeProgress("ajax error");
        console.error(e);
        reject();
    }
};

