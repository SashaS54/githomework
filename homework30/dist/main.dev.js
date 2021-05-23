"use strict";

var container = document.createElement("div");
container.setAttribute('style', 'width:90%; margin:0 auto; max-width:1200px');
document.body.prepend(container);
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var mList = document.createElement("ul");
mList.setAttribute('style', 'list-style:none');
container.prepend(mList);

for (var _i = 0; _i < playList.length; _i++) {
  var point = document.createElement('li');
  point.setAttribute('style', 'padding-bottom:10px; font-size: 16px');
  point.innerHTML = "<b>".concat(playList[_i].song, "</b>:").concat(playList[_i].author);
  mList.prepend(point);
}

var razdelitel = document.createElement("br");
container.append(razdelitel);
var btn = document.createElement("button");
btn.setAttribute('onclick', 'openq()');
btn.innerText = "openn";
container.append(btn);
var modal_menu = document.createElement("div");
modal_menu.setAttribute('style', 'width: 20%; background-color:green; position:absolute; left: 50%; top:50%; height:200px; transform:translate(-50%,-50%); text-align:center; padding-top: 85px');
modal_menu.innerText = 'MODAL MENU';
document.body.append(modal_menu);

function auto_hidden() {
  if (modal_menu.hidden === false) {
    modal_menu.hidden = true;
  }
}

auto_hidden();

function openq() {
  modal_menu.hidden = !modal_menu.hidden;
}

var razdelitel1 = document.createElement("br");
container.append(razdelitel1);
var svetlofor = document.createElement("div");
svetlofor.setAttribute("style", "width:100%; display:flex; flex-direction:column; justify-content: center; align-items:center;margin-top:50px");
document.body.append(svetlofor);
var panel = document.createElement("div");
panel.setAttribute("style", "background-color:black; width: 120px; display:flex; flex-direction:column;align-items:center;justify-content:center; padding-top:30px");
svetlofor.append(panel);
var stolb = document.createElement("div");
stolb.setAttribute("style", "width:100px;height:300px;background-color:#333; padding-top:30px; text-align:center");
svetlofor.append(stolb);
var krasnij = document.createElement("div");
krasnij.setAttribute("style", "width:60px;height:60px;border-radius:50%;background-color:red; margin-bottom:20px; opacity:0.3");
panel.append(krasnij);
var zeltij = document.createElement("div");
zeltij.setAttribute("style", "width:60px;height:60px;border-radius:50%;background-color:yellow; margin-bottom:20px; opacity:0.3");
panel.append(zeltij);
var zelenij = document.createElement("div");
zelenij.setAttribute("style", "width:60px;height:60px;border-radius:50%;background-color:green; margin-bottom:20px;opacity:0.3");
panel.append(zelenij);
var vkluchatel = document.createElement("buttont");
vkluchatel.setAttribute("style", "background-color: green; padding:5px; cursor:pointer;");
vkluchatel.setAttribute("onclick", "vkl()");
vkluchatel.innerText = "on/of";
stolb.append(vkluchatel);
var i = 0;

function vkl() {
  debugger;
  i++;

  if (i === 1) {
    krasnij.style.opacity = "1";
  }

  if (i === 2) {
    krasnij.style.opacity = "0.3";
    zeltij.style.opacity = '1';
  }

  if (i === 3) {
    zeltij.style.opacity = "0.3";
  }

  if (i === 4) {
    zeltij.style.opacity = "1";
  }

  if (i === 5) {
    zeltij.style.opacity = "0.3";
  }

  if (i === 6) {
    zeltij.style.opacity = "1";
  }

  if (i === 7) {
    zeltij.style.opacity = "0.3";
    zelenij.style.opacity = '1';
  }

  if (i === 8) {
    zelenij.style.opacity = '0.3';
    krasnij.style.opacity = "1";
    i = 1;
  }
}