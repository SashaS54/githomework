"use strict";

function hello() {
  var name = prompt("Enter your name");
  alert("\u041F\u0440\u0438\u0432\u0435\u0442  ".concat(name));
}

function Age() {
  var year = prompt("enter yaer of your birthday");

  if (year != '') {
    if (isNaN(year)) {
      alert("Enter valid year");
    } else {
      var thisYear = 2021;
      var minYear = 1850;

      if (year >= thisYear || year < minYear) {
        alert("Enter real year");
      } else {
        var age = thisYear - (year >> 0);
        alert(age);
      }
    }
  } else {
    alert("You didnt Enter year!!!!");
  }
}

function findPsquare() {
  var L = prompt("Enter side length");

  if (L != '') {
    if (isNaN(L) || L <= 0) {
      alert("enter corect lenght");
    } else {
      var P = Math.floor(L * 100) / 100 * 4;
      alert("P = ".concat(P));
    }
  } else {
    alert("You didnt Enter lenght");
  }
}

function findPcircle() {
  var R = prompt("Enter Radius");

  if (R != '') {
    if (isNaN(R) || R < 0) {
      alert("not valid radius");
    } else {
      var pi = Math.PI; //Я ЗНАЮ ЧТО МОЖНО БЕЗ ОБЬЯВЛЕНИЯ КОНСТАНТЫ ИСПОЛЬЗОВАТЬ MATH.PI, НО ТАК ДЛЯ ЗАДАНИЯ НУЖНО

      var P = Math.floor(pi * Math.pow(R, 2) * 100) / 100;
      alert("P = ".concat(P));
    }
  } else {
    alert("You didnt Enter radius");
  }
}

function TimeToRoad() {
  var S = prompt("Enter distanse between cityes"),
      T = prompt("Enter time in hours");

  if (S != '' || T != '') {
    if (isNaN(S) || isNaN(T) || S <= 0 || T < 0) {
      alert("Distance or time is not valid");
    } else {
      var V;
      V = Math.floor(S / T * 100) / 100;
      alert("V = ".concat(V, " km/h"));
    }
  } else {
    alert("You didnt enter time or distanse");
  }
}

function conventor() {
  var D = prompt("Enter USD");

  if (D != '') {
    if (isNaN(D) || D < 0) {
      alert("not valid number");
    } else {
      var E = 0.9;
      var soum = Math.floor(D * 0.9 * 100) / 100;
      alert("EUR = ".concat(soum));
    }
  } else {
    alert("You didnt enter USD");
  }
}

function memory() {
  var mem = prompt("Enter memory in gb");

  if (mem != '') {
    if (isNaN(mem) || mem < 0) {
      alert("Enter valid number");
    } else {
      var mb = 1024,
          apl = 800;
      var n;
      n = (mem * mb - mem * mb % 800) / apl;
      alert("".concat(n));
    }
  } else {
    alert("You didnt enter memory");
  }
}

function chocolate() {
  debugger;
  var n = parseInt(prompt("Enter quantity"));
  var cost = prompt("Enter cost of chocolate");

  if (n != '' && cost != '') {
    if (n > 0 && cost > 0) {
      var nCan = Math.floor(n / cost),
          deliv = Math.floor(n % cost);
      alert("You can buy ".concat(nCan, " chockolates;  your delive ").concat(deliv));
    } else {
      alert("enter corect number");
    }
  } else {
    alert("You didnt enter cost or quantity");
  }
}

function revers() {
  debugger;
  var n = prompt("Enter three-digid number");

  if (n != '') {
    if (n >= 101 && n <= 999) {
      nRevers = n % 10 * 100 + (n % 100 - n % 10) + (n - n % 100) * 0.01;
      alert("".concat(n, " <--> ").concat(nRevers));
    } else {
      alert("Not valid number");
    }
  } else {
    alert("You didnt enter number");
  }
}

function revers2_0() {
  var n = prompt("Enter three-digid number");

  if (n != '') {
    if (n >= 101 && n <= 999) {
      nRevers = (n - Math.floor(n * 0.1) * 10) * 100 + Math.floor((n - Math.floor(n * 0.01) * 100) * 0.1) * 10 + Math.floor(n * 0.01);
      alert("".concat(n, " <--> ").concat(nRevers));
    } else {
      alert("Not valid number");
    }
  } else {
    alert("You didnt enter number");
  }
}

function bank() {
  var money = parseFloat(prompt("How much"));

  if (money != '') {
    if (money > 0) {
      var procent = 0.05;
      var suma = money * procent + money + (money + money * procent) * procent;
      alert(suma);
    } else {
      alert("please enter corect values");
    }
  } else {
    alert("You didnt enter values");
  }
} //==================================================================homework 2============================================================================


function who_are_you() {
  var age = prompt("How old are you&");

  if (age != '') {
    if (age >= 0 && age <= 12) {
      alert("You are child");
    } else if (age > 12 && age < 18) {
      alert(" You are teenager");
    } else if (age > 18 && age < 60) {
      alert(" You are adult");
    } else if (age > 60) {
      alert(" You are oldman");
    } else {
      alert("not valid number");
    }
  } else {
    alert("You didnt enter values");
  }
}

function symbole() {
  debugger;
  var number = prompt("enter number from 0 to 9"),
      check = Math.floor(number) / number;

  if (number != '') {
    if (number < 0 > 9 && check != 1) {
      alert("please enter corect values");
    } else if (number == 1) {
      alert("!");
    } else if (number == 2) {
      alert("@");
    } else if (number == 3) {
      alert("#");
    } else if (number == 4) {
      alert("$");
    } else if (number == 5) {
      alert("%");
    } else if (number == 6) {
      alert("^");
    } else if (number == 7) {
      alert("&");
    } else if (number == 8) {
      alert("*");
    } else if (number == 9) {
      alert("(");
    } else if (number == 0) {
      alert(")");
    } else {
      alert("invalid number");
    }
  } else {
    alert("You didnt enter number");
  }
}