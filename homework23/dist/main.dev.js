"use strict";

function suma() {
  var a = document.getElementById("suma_number1").value,
      b = document.getElementById("suma_number2").value,
      rez = 0;

  for (var i = a; i <= b; i++) {
    rez += parseInt(i);
  }

  document.getElementById("suma_rez").innerText = rez;
}

function del() {
  var a = document.getElementById("del_number1").value,
      b = document.getElementById("del_number2").value,
      rez = '';
}