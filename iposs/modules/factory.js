const _ = QTopo.util;
export const initFactory = iposs => {
    const { url, scene } = iposs;

    iposs.factory = {
        index() {
            iposs.progress(10, "执行首绘");
            return httpCtl(url.index).then(data => {
                iposs.progress(50, "正在绘制!");
                return data;
            });
        },
        goDown(pid) {
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
        },
        goBack(pid) {
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
        },
        goTo(pid) {
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
        },
        refresh(pid) {
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
        },
        alarm() {
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
        },
        location() {
            return httpCtl({
                url: url.get_path,
                data: {
                    objId: scene.data("pid")
                },
                _text: true
            });
        },
        save() {
            return httpCtl({
                url: url.save,
                _text: true
            },e=>e==0);
        },
        savePosition() {
            let movedObjs = `1;${scene.data("pid")};`;
            if (scene.data("moved").size > 0) {
                let moved = "";
                scene.data("moved")
                    .forEach(node => moved += (node.data("id") + "," + node.position().map(e => Math.floor(e)).join(",") + "@"));
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
        },
        search(value, type) {
            return httpCtl({
                url: url.search,
                data: {
                    seachValue: value,
                    seachType: type
                }
            });
        },
        vendorList(select) {
            return httpCtl(url.get_vendorList)
                .then(data => data.forEach(option => select.append(`<option value=${option.vendor_id}>${option.descr}</option>`)));
        },
        userGather(select) {
            return httpCtl(url.get_userGather)
                .then(data => data.forEach(option => select.append(`<option value=${option.gatherId}>${option.descr}</option>`)));
        },
        deviceIp(ip) {
            return httpCtl({
                url: url.get_deviceIp,
                data: {
                    id: ip
                },
                _text: true
            });
        },
        deviceMode(select, id) {
            return httpCtl({
                url: url.get_deviceMode,
                data: {
                    vendor_id: id
                }
            }).then(data => data.forEach(option => select.append(`<option value=${option.device_model}>${option.descr}</option>`)))
        },
        deviceMode_withoutOs(select, id) {
            return httpCtl({
                url: url.get_deviceMode_withoutOs,
                data: {
                    vendor_id: id
                }
            }).then(data => data.forEach(option => select.append(`<option value=${option.device_name}>${option.device_name}</option>`)))
        },
        resourceList(select) {
            httpCtl(url.get_resList)
                .then(data => data.forEach(option => select.append(`<option value=${option.resource_type_id}>${option.descr}</option>`)));
        },
        linkCount(id) {
            return httpCtl({
                url: url.get_linkCount,
                data: {
                    linkId: id
                }
            });
        },
        addGroup(data) {
            return httpCtl({
                url: url.add_group,
                data
            });
        },
        addDevice(data) {
            return httpCtl({
                url: url.add_device,
                data
            }, e => e == 1);
        },
        addSegment(data) {
            return httpCtl({
                url: url.add_segment,
                data
            }, e => _.notNull(e) && e.Device);
        },
        addLink(fromId, toId) {
            return httpCtl({
                url: url.add_link,
                data: {
                    pid: scene.data("pid"),
                    linkId: fromId + "" + toId + "1/0",
                    from: fromId,
                    to: toId
                },
                _text: true
            }, e => _.notNull(e));
        },
        remove(ids) {
            return httpCtl({
                url: url.remove,
                data: {
                    ids: ids.join(",")
                }
            }, e => e == 0);
        },
        editNode(data) {
            return httpCtl({
                url: url.edit_node,
                data
            }, e => e == 0);
        },
        manage(id) {
            return httpCtl({
                url: url.manage,
                data: {
                    type: 2,
                    ids: id
                }
            }, e => e == 1)
        },
        cancelManage(id) {
            return httpCtl({
                url: url.manage,
                data: {
                    type: 0,
                    ids: id
                }
            }, e => e == 1);
        },
        copy(ids) {
            return httpCtl({
                url: url.copy,
                data: {
                    objIdArray: ids.join(",")
                }
            }, e => _.notNull(e) && e.Nodes);
        },
        cut_paste(ids) {
            return httpCtl({
                url: url.cut_paste,
                data: {
                    ids: ids.join(","),
                    pid: scene.data("pid")
                }
            }, e => e == 1);
        }
    };

    $.ajaxSetup({
        catch: false,
        complete: () => iposs.loading.close(),
        beforeSend: () => iposs.loading.open()
    });
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