let _=QTopo.util;
export let events={
    TopoEvent_DEBUG:function(position,element,properties){
        console.info(position,element);
    },
    TopoEvent_GROUP_EXPANDED_TOGGLE:function(position,element,properties){
        if(_.isGroup(element)&&_.isFunction(element.toggle)){
            element.toggle();
        }
    },
    TopoEvent_LINK_EXPANDED_TOGGLE:function(position,element,properties){
        if(_.isLink(element)&&_.isFunction(element.toggle)){
            element.toggle();
        }
    }
};