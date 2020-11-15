let li = document.getElementsByTagName("li");
let para = document.getElementById("para");
function prepareSetColor() {
    setColor(li);
}
function setColor(li) {
    for (let i = 0; i < li.length; i++) {
        if (i % 2 == 0) {
            li[i].setAttribute("id", "even");
        }
        else {
            li[i].setAttribute("id", "odd");
        }
    }
    console.log(li[2]);
}
function clickEvent(para) {
    let x = para.target;
    if (x.nodeName.toLowerCase() === "li") {
        alert(x.innerHTML);
    }
}
function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

para.addEventListener("click", clickEvent, false);
addLoadEvent(prepareSetColor);