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
  var number = prompt("enter number from 0 to 9"),
      check = Math.floor(number) / number;

  if (number != '') {
    if (number < 0 > 9 && check != 1) {
      alert("please enter corect values");
    } else {
      switch (number) {
        case "1":
          nSymbole = "!";
          break;

        case "2":
          nSymbole = "@";
          break;

        case "3":
          nSymbole = "#";
          break;

        case "4":
          nSymbole = "$";
          break;

        case "5":
          nSymbole = "%";
          break;

        case "6":
          nSymbole = "^";
          break;

        case "7":
          nSymbole = "&";
          break;

        case "8":
          nSymbole = "*";
          break;

        case "9":
          nSymbole = "(";
          break;

        case "0":
          nSymbole = ")";
          break;

        default:
          nSymbole = "Not valid number";
          break;
      }

      alert(nSymbole);
    }
  } else {
    alert("You didnt enter number");
  }
}

function check() {
  var number = prompt("enter number"),
      check = Math.floor(number) / number;

  if (number != '') {
    if (number < 101 && number > 999 && check != 1) {
      alert("please enter corect values");
    } else {
      var n100 = Math.floor(number * 0.01),
          n10 = Math.floor(0.1 * (number % 100)),
          n1 = number % 10;

      if (n100 != n10 && n10 != n1 && n1 != n100) {
        alert("no");
      } else {
        alert("yea");
      }
    }
  } else {
    alert("You didnt enter number");
  }
}

function visokosnij() {
  var number = prompt("enter year"),
      qloor = Math.floor(number) / number;

  if (number != '') {
    if (number > 1 && qloor === 1) {
      var proverka = number % 4 == 0 ? "visokosnij" : "obichnij";
      alert(proverka);
    } else {
      alert("not valid year");
    }
  } else {
    alert("You didnt enter number");
  }
}

function palindrom() {
  var number = prompt("enter number"),
      floor = Math.floor(number) / number;

  if (number != '') {
    if (number >= 10000 && number <= 99999 && floor === 1) {
      var n1 = Math.floor(number * 0.0001),
          n10 = Math.floor(number % 10000 * 0.001),
          n1000 = Math.floor(number % 100 * 0.1),
          n10000 = number % 10,
          rez = n1 == n10000 && n10 == n1000 ? "yes" : "no";
      alert(rez);
    } else {
      alert("not valid number");
    }
  } else {
    alert("You didnt enter number");
  }
}

function conventor2() {
  var bucks = prompt("enter soum in $"),
      currency = prompt("`chose 1 type of currency ( UAH , AZN, EUR)`");

  if (bucks != "" && currency != "") {
    var EUR = 1.2,
        AZN = 0.9,
        // na randome 
    UAH = 0.08;

    if (bucks > 0 && currency === "UAH") {
      var convent = bucks * UAH;
      alert(convent);
    } else if (bucks > 0 && currency === "AZN") {
      var _convent = bucks * AZN;

      alert(_convent);
    } else if (bucks > 0 && currency === "EUR") {
      var _convent2 = bucks * EUR;

      alert(_convent2);
    } else {
      alert("not valid number");
    }
  } else {
    alert("zapolni");
  }
}

function sale() {
  var cost = prompt("enter cost in $");

  if (cost != "") {
    if (cost >= 200 && cost < 300) {
      var procent = 0.03;
      var rez = cost + cost * procent;
      alert(rez);
    } else if (cost > 300 && cost < 500) {
      var _procent = 0.05;

      var _rez = cost + cost * _procent;

      alert(_rez);
    } else if (cost > 500) {
      var _procent2 = 0.07;

      var _rez2 = cost + cost * _procent2;

      alert(_rez2);
    } else {
      alert("not valid number");
    }
  } else {
    alert("zapolni");
  }
}

function square2() {
  debugger;
  var lenght = parseFloat(prompt("enter lenth")),
      P = parseFloat(prompt("enter lenth"));

  if (!isNaN(lenght) || !isNaN(P)) {
    if (P > 0 && lenght > 0) {
      var R = lenght / Math.PI,
          LS = P / 4,
          rez = R == LS ? "YES" : "NO";
      alert(rez);
    } else {
      alert("not valid number");
    }
  } else {
    alert("zapolni");
  }
}

function question() {
  var firstQ = parseFloat(prompt("2+2=?")),
      secondQ = parseFloat(prompt("2+6=?")),
      thirdQ = parseFloat(prompt("2+54=?"));

  if (!isNaN(firstQ) || !isNaN(secondQ) || !isNaN(thirdQ)) {
    var firstAnsver, secondAnsver, thirdAnsver;

    if (firstQ = 4) {
      firstAnsver = 2;
    } else {
      firstAnsver = 0;
    }

    if (secondQ = 8) {
      secondAnsver = 2;
    } else {
      secondAnsver = 0;
    }

    if (thirdQ = 56) {
      thirdAnsver = 2;
    } else {
      thirdAnsver = 0;
    }

    var rez = thirdAnsver + secondAnsver + firstAnsver;
    alert(rez);
  } else {
    alert("zapolni");
  }
}

function yearq() {
  debugger;
  var date = prompt("Enter date day/month/year");
  var arrT = date.split("/"),
      d = parseInt(arrT[0]),
      m = parseInt(arrT[1]),
      y = parseInt(arrT[2]),
      z = 1,
      vis = y % 4,
      day = d + 1;

  if (!isNaN(d) || !isNaN(m) || !isNaN(y)) {
    if (d > 0 && m > 0 && m < 13 && y > 0) {
      switch (m) {
        case 1:
          if (day == 31) {
            m = m + 1;
            day = 1;
          } else if (day > 31) {
            z = z + 1;
          }

          break;

        case 2:
          if (day === 30 && vis === 0) {
            m = m + 1;
            day = 1;

            if (day > 30) {
              z = z + 1;
            }
          } else if (day == 29 && vis != 0) {
            m = m + 1;
            day = 1;
          } else if (day > 29 && vis == 0) {
            z = z + 1;
          } else if (day === 29 && vis == 0) {
            m = m;
          }

          break;

        case 3:
          if (day == 31) {
            m = m + 1;
            day = 1;
          } else if (day > 32) {
            z = z + 1;
          }

          break;

        case 4:
          if (day == 30) {
            m = m + 1;
            day = 1;
          } else if (day > 31) {
            z = z + 1;
          }

          break;

        case 5:
          if (day == 30) {
            m = m + 1;
            day = 1;
          } else if (day > 31) {
            z = z + 1;
          }

          break;

        case 6:
          if (day == 30) {
            m = m + 1;
            day = 1;
          } else if (day > 31) {
            z = z + 1;
          }

          break;

        case 7:
          if (day == 31) {
            m = m + 1;
            day = 1;
          } else if (day > 32) {
            z = z + 1;
          }

          break;

        case 8:
          if (day == 29) {
            m = m + 1;
            day = 1;
          } else if (day > 30) {
            z = z + 1;
          }

          break;

        case 9:
          if (day == 30) {
            m = m + 1;
            day = 1;
          } else if (day > 31) {
            z = z + 1;
          }

          break;

        case 10:
          if (day == 31) {
            m = m + 1;
            day = 1;
          } else if (day > 32) {
            z = z + 1;
          }

          break;

        case 11:
          if (day == 30) {
            m = m + 1;
            day = 1;
          } else if (day > 31) {
            z = z + 1;
          }

          break;

        case 12:
          if (day == 31) {
            m = 1;
            day = 1;
            y = y + 1;
          } else if (day > 32) {
            z = z + 1;
          }

          break;
      }

      if (z == 2) {
        alert("not VALID DATE");
      } else {
        var rez = "".concat(day, "/").concat(m, "/").concat(y);
        alert(rez);
      }
    } else {
      alert("not VALID DATE");
    }
  } else {
    alert("zapolni");
  }
}
/*

function go () {
    let number = parseInt(prompt("enter number")),
        rez = addZero(number);
    alert (rez);
}

function addZero(n) {
    return n < 10?"0" + n:n;
}


function text () {
    const t = document.getElementById("my_text").value;
    //document.getElementById ("text_rez"). innerHTML = 'hello, ' + t + "!"
    document.getElementById("text_rez").innerHTML = `
    <p>
        Welcome!<br>
        Hello, <b>${t}</b>!
    <p>
    `;
}


function diez() {
    const n = parseInt(document.getElementById("diez_number").value);
    if(n!=0 && !isNaN(n) && n>0) {
        let rez = '';
        let i = 0;
        while(i<n) {
            i++;
            //rez = rez + '#';
            rez += '#';
        }
        document.getElementById("diez_rez").innerText = rez;
    }else {
        alert("enter diez number!")
    }
}

function reverse() {
    let n = parseInt(document.getElementById("reverse_number").value);
    if(n!=0 && ! isNaN(n) && n>0) {
        let rez = '';
        while(n>0) {
            rez += n+`, `;
            n--;
        }
        document.getElementById("reverse_rez").innerText = rez;
    }else {
        alert("enter diez number!")
    }
}



/*
function pow() {
    let n = parseInt(document.getElementById("pow_number").value);
    let s = parseInt(document.getElementById("pow_stepen").value);
    let valid = true;
    let errMsg = ''
    if(!isNaN(n)) {
        errMsg += "enter number";
        valid = false;
    }
    if(!isNaN(s)) {
        errMsg += "enter stepen";
        valid = false;
    if(valid) {
        if (s>0){
        }else {
            let rez = n;
            let i = 1;
            while(i<s){
               rez = rez * n;
                i++            
        }
        document.getElementById("reverse_rez").innerText = rez;
    }else {
        document.getElementById("reverse_rez").innerHTML = `<span class="color-danger">${errMsg}</span>`;
    
}


function del() {
    let a = parseInt(document.getElementById("del_number1").value);
    let b = parseInt(document.getElementById("del_number2").value);
    let rez = '';

    let max = (a>b)?a:b;

    while(max!=0){
        if(a%max==0) {
            rez += max+ ', '
        }
        max--;
    }

    document.getElementById("del_rez").innerText = rez;
    
}

function primer () {
    const result = 6;
    let answer = 0 ;
    let rez = true;
    do {
        answer = parseInt(prompt("2 + 2 * 2 = ?"))
        if(answer===result) {
            alert("good")
            rez = true;
        }else {
            alert("answer is incorect");
            rez = false;
        }
    } while(!rez);
}


function krat() {
    const k = parseInt(document.getElementById("krat_number").value);
    let rez = '';
    for (let i=1; i<=100; i++) {
        if (i%k==0) {
            rez += i + ' ,';
        }
    } 
}
*/