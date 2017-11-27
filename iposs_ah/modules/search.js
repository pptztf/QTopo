const _ = QTopo.util;
let search_content = `
    <div class="iposs-search">
        <div class="iposs-search_row">
            <select class="iposs-search_mode-select">
                    <option value="1">设备IP</option>
                    <option value="2">设备名称</option>
                    <option value="3">设备型号</option>
                </select>
            <input class="iposs-search_input"/>
            <select class="iposs-search_vendor-list"></select>
        </div>
        <div class="iposs-search_row"><select class="iposs-search_device-list"></select></div>
    </div>
`,
    resultPanel = `<div class='iposs-search_result'>
        <div class="iposs-search_result-close">X</div>
        <select class="iposs-search_result-select"></select>
    </div>`;

export let initSearch = function (iposs) {
    search_content = $(search_content);
    resultPanel = $(resultPanel);

    const factory = iposs.factory,
        scene = iposs.scene,
        resultSelect = resultPanel.find("select"),
        searchWin = new QTopo.Popup(iposs.dom, "iposs-search"),
        mode = search_content.find('.iposs-search_mode-select'),
        searchInput = search_content.find('.iposs-search_input'),
        vendorList = search_content.find('.iposs-search_vendor-list').hide(),
        deviceList = search_content.find('.iposs-search_device-list'),
        deviceRow = deviceList.closest('.iposs-search_row').hide(),
        ok = $("<button type='button' class='qtopo-btn'>确定</button>").on("click", ()=> {
            let type = mode.val(), value = searchInput.val().trim();
            if (type == 3) {
                value = deviceList.val();
            }
            if (_.notNull(value) && value != -1 || value != -2) {
                factory.search(value, type)
                    .then(arr=> {
                        resultSelect.empty().append(arr.map(op=>`<option value="${op.pid}">${op.descr}</option>`).join(''));
                        resultPanel.css("visibility", "visible");
                    });
            }
            searchWin.close();
        }),
        cancel = $("<button type='button' class='qtopo-btn'>取消</button>").on("click", ()=> searchWin.close());

    $(iposs.dom).append(resultPanel);
    $(searchWin.title).append("搜索");
    $(searchWin.content).append(search_content);
    $(searchWin.foot).append(ok).append(cancel);

    iposs.search = () =>{
        closeResult();
        searchWin.open();
    };

    mode.on("change", e=> {
        if (mode.val() == 3) {
            mode.attr("disabled", true);
            vendorList.empty();
            vendorList.show();
            searchInput.hide();
            iposs.factory.vendorList(vendorList).finally(()=>mode.attr("disabled", false));
        } else {
            vendorList.hide();
            deviceRow.hide();
            searchInput.show();
        }
    });

    vendorList.on("change", e=> {
        let vendorId = vendorList.val();
        deviceList.empty();
        if (vendorId > -1) {
            vendorList.attr("disabled", true);
            deviceRow.show();
            iposs.factory.deviceMode_withoutOs(deviceList, vendorId).finally(()=>vendorList.attr("disabled", false));
        } else {
            deviceRow.hide();
        }
    });

    resultPanel.find('.iposs-search_result-close').on('click', e=>closeResult());

    resultSelect.on("change", e=> {
        const id = resultSelect.val();
        if (id != -1 && id != -2) {
            let inSameLayer=false;
            scene.map(el=>{
                if(el.data('id')==id){
                    scene.moveToNode(el);
                    inSameLayer=true;
                    return false;
                }
            });
            if(!inSameLayer){
                const prop ={
                    id:id
                };
                iposs.events.TopoEvent_GO_TO(null, null, prop).then(()=>{
                    scene.map(el=>{
                        if(el.data('id')==id){
                            scene.moveToNode(el);
                            return false;
                        }
                    });
                });
            }
        }
    });

    function closeResult(){
        resultSelect.empty();
        resultPanel.css("visibility", "hidden");
    }
};