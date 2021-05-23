"use strict";

/*let p = document.createElement("p");
let btn = document.createElement("button");
btn.innerText = "toggle text";
btn.setAttribute("onclick", 'toggleText()');

document.body.prepend(btn);


p.innerText = 'lorem oposum';

document.body.prepend(p);

function toggleText() {
    //p.hidden = !p.hidden
    if(p.hidden===false) {
        p.hidden = true
    }else {
        p.hidden = false
    }
}
*/
var pBar = document.createElement("div");
pBar.style.border = "2px solid #999";
pBar.style.height = "40px";
pBar.style.backgroundColor = "#efefef";
var bar = document.createElement("div");
bar.setAttribute('style', "width:0%;height:100%; background-color:#333;");
pBar.prepend(bar);
document.body.prepend(pBar);
var btnq = document.createElement("button");
btnq.innerText = "add 5%";
document.body.append(btnq);

btnq.onclick = function () {
  var new_width = bar.style.width + 5 + "%";

  if (new_width < 100) {
    bar.style.width = new_width + "%";
  }
};