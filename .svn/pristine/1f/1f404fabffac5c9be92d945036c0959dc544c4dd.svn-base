import initAlarmInfo from "./alarmInfo/temp";
import initAddDevice from "./addDevice/temp";
import initAddSegment from "./addSegment/temp";
import initAddGroup from "./addGroup/temp";
import initEditDeviceAttr from "./editDeviceAttr/temp";
import initEditDeviceType from"./editDeviceType/temp";
import initEditDeviceTypeAndAttr from"./editDeviceTypeAndAttr/temp";
import initEditSegment from"./editSegment/temp";
import initTopNav from'./topoNav/temp';
const _ = QTopo.util;

export let initWindows = iposs=> {
    const alarmInfo = initAlarmInfo(iposs),
        addDevice = initAddDevice(iposs),
        addSegment = initAddSegment(iposs),
        addGroup=initAddGroup(iposs),
        editDeviceAttr = initEditDeviceAttr(iposs),
        editDeviceType = initEditDeviceType(iposs),
        editSegment = initEditSegment(iposs),
        editDeviceTypeAndAttr=initEditDeviceTypeAndAttr(iposs),
        topoNav=initTopNav(iposs),
        windows = {
            addGroup,
            addDevice,
            alarmInfo,
            addSegment,
            editDeviceAttr,
            editDeviceType,
            editDeviceTypeAndAttr,
            editSegment,
            topoNav
        };
    iposs.windows = (name, config)=>_.notNull(windows[name]) && windows[name].open(config);
};