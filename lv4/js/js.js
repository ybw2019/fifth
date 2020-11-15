let text = document.getElementById("text");
let submit = document.getElementById("submit");
let info = document.getElementById("info");
function createMessage() {
    let newli = document.createElement("li");
    info.appendChild(newli);
    let res = text.value;
    let newmeg = document.createTextNode(res);
    newli.appendChild(newmeg);
    text.childNodes.innerHTML = "";
    text.value = "";
}
submit.addEventListener("click", createMessage, false);