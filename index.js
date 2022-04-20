function openTab(evt, name) {
    var i, info, tablinks;
    info = document.getElementsByClassName("tabcontent");
    for (i = 0; i<info.length;i++) {
        info[i].style.display="none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i<tablinks.length;i++) {
        tablinks[i].className=tablinks[i].className.replace("active","");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += "active";
}
