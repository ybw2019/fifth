let div = document.getElementsByTagName("div");
let btn = document.getElementById("blackbar");
let span = document.getElementsByTagName("span");
function prepareAddBlackbar() {
    addBlackbar(div[0]);//div是一个类数组，必须加[0]指明是其中的哪一个元素，哪怕其中只有一个元素
}
function addBlackbar(e) {
    let x = e;
    let get_span = x.getElementsByTagName("span");
    console.log(x);
    for (let i = 0; i < get_span.length; i++) {
        if (!get_span[i].getAttribute("id") || get_span[i].getAttribute("id") == "#") {
            get_span[i].setAttribute("id", "color_change");
        }
        else {
            get_span[i].setAttribute("id", "#");
        }
    }
}
btn.addEventListener("click", prepareAddBlackbar, false);
