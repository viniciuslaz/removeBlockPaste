disableEvents = (event => {
    let name = document.title;
    if(name.includes('HUAWEI')){
        event.stopImmediatePropagation();
    }
});
document.addEventListener('paste',disableEvents,true);
