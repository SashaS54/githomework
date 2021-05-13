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
    this.drob.ch = this.drob1.ch1 * this.drob2.z2 + this.drob2.ch2 * this.drob1.z1;
    this.drob.z = this.drob1.z1 * this.drob2.z2;
  },
  raznica: function raznica() {
    debugger;
    this.drob.ch = this.drob1.ch1 * this.drob2.z2 - this.drob2.ch2 * this.drob1.z1;
    this.drob.z = this.drob1.z1 * this.drob2.z2;
  },
  delenie: function delenie() {
    this.drob.ch = this.drob1.ch1 * this.drob2.z2;
    this.drob.z = this.drob2.ch2 * this.drob1.z1;
  },
  umnozenie: function umnozenie() {
    this.drob.ch = this.drob1.ch1 * this.drob2.ch2;
    this.drob.z = this.drob2.z2 * this.drob1.z1;
  },
  sokrashenie: function sokrashenie() {
    del();
    drobs.drob.ch = drobs.drob.ch / drobs.drob.dl;
    drobs.drob.z = drobs.drob.z / drobs.drob.dl;
  },
  dobavit: function dobavit() {
    debugger;
    this.drob1.ch1 = parseInt(document.getElementById("ch1").value);
    this.drob1.z1 = parseInt(document.getElementById("z1").value);
    this.drob2.ch2 = parseInt(document.getElementById("ch2").value);
    this.drob2.z2 = parseInt(document.getElementById("z2").value);
    this.drob.znak = document.getElementById("znak").value;
  },
  dejstvie: function dejstvie() {
    debugger;
    drobs.dobavit();

    if (drobs.drob.znak == "+") {
      drobs.suma();
    }

    if (drobs.drob.znak == "-") {
      drobs.raznica();
    }

    if (drobs.drob.znak == "*") {
      drobs.umnozenie();
    }

    if (drobs.drob.znak == "/") {
      drobs.delenie();
    }

    drobs.sokrashenie();
    document.getElementById("ch").value = drobs.drob.ch;
    document.getElementById("z").value = drobs.drob.z;
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