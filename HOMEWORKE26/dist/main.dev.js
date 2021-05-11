"use strict";

var car = {
  "proizvoditel": "LG",
  "model": "QQ",
  "Year": 2021,
  "middle speed": 60
};

function vivesti() {
  var x = "<ul>";

  for (var k in car) {
    x += "<li>".concat(k, ":").concat(car[k], "</li>");
  }

  x += "</ul>";
  document.getElementById("car").innerHTML = x;
}

function spratat() {
  document.getElementById("car").innerHTML = "";
}

function vrema() {
  debugger;
  var S = parseInt(document.getElementById("rastojanie").value),
      t = (S / car["middle speed"] + parseInt((S / car["middle speed"] - 0.00000000001) / 4)).toFixed(2);
  document.getElementById("vrema_rez").innerHTML = "Vremie dla distancii v ".concat(S, "km = ").concat(t, "h (s uchetom pererivov kazdie 4 chasa na chas)");
}

var drobs = {
  drob: {},
  drob1: {},
  drob2: {},
  dobavlenie: function dobavlenie() {},
  suma: function suma() {
    debugger;
    this.drob.ch = this.drob1.ch1 * this.drob2.z + this.drob2.ch2 * this.drob1.z;
    this.drob.z = this.drob1.z1 * this.drob2.z2;
  },
  raznica: function raznica() {
    ch = drobs.drob1["ch"] * drobs.drob2["z"] - drobs.drob2["ch"] * drobs.drob1["z"];
    z = drobs.drob1["z"] * drobs.drob2["z"];
    return ch, z;
  },
  delenie: function delenie() {
    ch = drobs.drob1["ch"] * drobs.drob2["z"];
    z = drobs.drob2["ch"] * drobs.drob1["z"];
    return ch, z;
  },
  umnozenie: function umnozenie() {
    ch = drobs.drob1["ch"] * drobs.drob2["ch"];
    z = drobs.drob1["z"] * drobs.drob2["z"];
    return ch, z;
  },
  sokrashenie: function sokrashenie() {
    drobs.drob.ch = drobs.drob.ch / drobs.drob.dl;
    drobs.drob.z = drobs.drob.z / drobs.drob.dl;
  },
  dobavit: function dobavit() {
    this.drob1.ch1 = parseInt(document.getElementById("ch1").value);
    this.drob1.z1 = parseInt(document.getElementById("z1").value);
    this.drob2.ch2 = parseInt(document.getElementById("ch2").value);
    this.drob2.z2 = parseInt(document.getElementById("z2").value);
    this.drob.znak = parseInt(document.getElementById("znak").value);
  },
  dejstvie: function dejstvie() {
    debugger;
    drobs.dobavit();

    if (this.drob.znak = "+") {
      drobs.suma();
    } else if (this.drob.znak = "-") {
      drobs.delenie();
    } else if (this.drob.znak = "*") {
      drobs.umnozenie();
    } else if (this.drob.znak = "/") {
      drobs.delenie();
    }

    var ch = drobs.drob.ch;
    var z = drobs.drob.z;
    ch = document.getElementById("ch").value;
    z = document.getElementById("z").value;
  }
};

function del() {
  debugger;
  var a = drobs.drob.ch,
      b = drobs.drob.z,
      i = Math.max(a, b);

  if (!isNaN(a) && !isNaN(b)) {
    while (a % i !== 0 || b % i !== 0) {
      i--;
      rez = i;
    }
  }

  drobs.drob.dl = i;
}