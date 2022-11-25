disableEvents = (event => {
    let name = document.title;
    if(name=="HUAWEI WiFi WS5200" || name=="HUAWEI WiFi AX2S" || name=="HUAWEI WiFi AX2"){
        event.stopImmediatePropagation();
    }
});
document.addEventListener('paste',disableEvents,true);
