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
  debugger;
  var a = Math.abs(parseInt(document.getElementById("del_number1").value)),
      b = Math.abs(parseInt(document.getElementById("del_number2").value)),
      i = Math.max(a, b);

  if (!isNaN(a) && !isNaN(b)) {
    while (a % i !== 0 || b % i !== 0) {
      i--;
      rez = i;
    }
  } else {
    alert("Enter valid danes");
  }

  document.getElementById("del_rez").innerText = rez;
}

function allDel() {
  debugger;
  var a = parseInt(document.getElementById("allDel_number").value),
      i = a;
  rez = '';

  while (i > 0) {
    if (a % i == 0) {
      rez += i + ", ";
    }

    i--;
  }

  document.getElementById("allDel_rez").innerText = rez;
}

function kolichestvo() {
  debugger;
  var a = parseInt(document.getElementById("kolichestvo_number").value),
      i = 0,
      rez = 0;

  while (a >= 1) {
    a = a / 10;
    i++;
    rez = i;
  }

  document.getElementById("kolichestvo_rez").innerText = rez;
}

function statistika() {
  debugger;
  var i = 1,
      pol = 0,
      otr = 0,
      par = 0,
      nepar = 0,
      nol = 0;

  do {
    var n = prompt(parseInt("Enter number"));
    i++;

    if (n > 0) {
      pol++;
    }

    if (n < 0) {
      otr++;
    }

    if (n % 2 == 0) {
      par++;
    }

    if (n % 2 != 0) {
      nepar++;
    }

    if (n == 0) {
      nol++;
    }
  } while (i <= 10);

  {
    var _rez = "\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435: ".concat(pol, "; otricatelnie: ").concat(otr, "; parnie: ").concat(par, "; neparnie: ").concat(nepar, "; nuli: ").concat(nol, ";");

    alert(_rez);
  }
}

function calc() {
  do {
    var number = prompt("Введите 2 числа и знак между ними  (number znak number)  "),
        arrT = number.split(" "),
        _rez2 = void 0,
        a = parseFloat(arrT[0]),
        znak = arrT[1],
        b = parseFloat(arrT[2]);

    if (znak == "+") {
      _rez2 = a + b;
      alert(_rez2);
    } else if (znak == "-") {
      _rez2 = a - b;
      alert(_rez2);
    } else if (znak == "/") {
      _rez2 = a / b;
      alert(_rez2);
    } else if (znak == "*") {
      _rez2 = a * b;
      alert(_rez2);
    } else {
      alert("not valids danes");
    }

    result = confirm("еще 1 пример");
  } while (result === true);
}

function zdvig() {
  debugger;
  var a = parseInt(document.getElementById("zdvig_number").value),
      //12345
  i = 0,
      z = a;

  while (z >= 1) {
    z = z / 10;
    i++; //5
  }

  var first = parseInt(10 * a / Math.pow(10, i));
  var second = (parseInt(100 * a / Math.pow(10, i)) - first * 10) * 10;
  123456;
  var chast = (a - parseInt(a / Math.pow(10, i - 2)) * Math.pow(10, i - 2)) * 100 + second + first;
  alert(chast);
}

function day() {
  var i = 0;
  var result;

  do {
    i++;

    if (i == 1) {
      alert("Monday");
    } else if (i == 2) {
      alert("tuesday");
    } else if (i == 3) {
      alert("wednesday");
    } else if (i == 4) {
      alert("thursday");
    } else if (i == 5) {
      alert("Friday");
    } else if (i == 6) {
      alert("satyrday");
    } else if (i == 7) {
      alert("Sunnday");
    } else if (i > 7) {
      i = 0;
      alert("monday");
    }

    result = confirm("one more?");
  } while (result === true);
}

function tablica() {
  debugger;
  var number = parseInt(document.getElementById("tablica_number").value),
      rez = '';

  if (isNaN(number)) {
    alert("Enter number");
  } else if (number >= 2 && number <= 9) {
    for (var i = 1; i <= 9;) {
      i++;
      rez += "<span style=\"width: 40px; height: 40px; border: 1px solid black; display: inline-block; text-align: center\">".concat(number * i, "</span>");
    }
  } else {
    alert("not valid danes");
  }

  document.getElementById("tablica_rez").innerHTML = rez;
}