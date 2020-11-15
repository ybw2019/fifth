let body = document.getElementById("color");
let btn_color = document.getElementById("bg_color");
let btn_big = document.getElementById("bigger");
let btn_small = document.getElementById("smaller");
let para = document.getElementById("sentences");
function prepareThemeColor() {
    themeColorChange(body);
}
function prepareBigFont() {
    bigFont(para);
}
function prepareSmallFont() {
    smallFont(para);
}
function bigFont(para) {
    if (para.getAttribute("id") == "sentences") {
        para.setAttribute("id", "font_1");
        return;
    }
    if (para.getAttribute("id") == "font_1") {
        para.setAttribute("id", "font_2");
        return;
    }
    if (para.getAttribute("id") == "font_2") {
        para.setAttribute("id", "font_3");
        return;
    }
    if (para.getAttribute("id") == "font_3") {
        alert("已经不能再大惹");
        return;
    }
}
function smallFont(para) {
    if (para.getAttribute("id") == "sentences") {
        alert("已经不能再小惹");
        return;
    }
    if (para.getAttribute("id") == "font_1") {
        para.setAttribute("id", "sentences");
        return;
    }
    if (para.getAttribute("id") == "font_2") {
        para.setAttribute("id", "font_1");
        return;
    }
    if (para.getAttribute("id") == "font_3") {
        para.setAttribute("id", "font_2");
        return;
    }
}
function themeColorChange(body) {
    if (body.getAttribute("id") == "color") {
        body.setAttribute("id", "red");
        return;//判断结束后退出函数
    }
    if (body.getAttribute("id") == "red") {
        body.setAttribute("id", "pink");
        return;
    }
    if (body.getAttribute("id") == "pink") {
        body.setAttribute("id", "color");
        return;
    }
}
btn_color.addEventListener("click", prepareThemeColor, false);
btn_big.addEventListener("click", prepareBigFont, false);
btn_small.addEventListener("click", prepareSmallFont, false);