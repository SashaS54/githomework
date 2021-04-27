"use strict";

/*const isLeapYear = (year)=>{
    console.log(this);
    return (year%400===0 || (year%4===0 && year%100!==0))?true:false;
}

function checkYear() {
    console.log(this);
    const y = parseInt(document.getElementById("year_number").value);
    let rez = `year is not leap`;
    if(isLeapYear(y)) {
        rez = 'Year is leap';
    }
    document.getElementById("year_rez").innerText = rez;
}
*/
function mySumm(a, b) {
  return a + b;
}

function calc() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "+";
  a = parseInt(a);
  b = parseInt(b);

  switch (action) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    case '/':
      return a / b;

    default:
      return 'incorect action';
  }
}

function myCalc() {
  var a = parseInt(document.getElementById("f_number").value),
      b = parseInt(document.getElementById("s_number").value),
      act = parseInt(document.getElementById("action").value);
  var rez = calc(a, b, act);
  document.getElementById("calc_rez").innerText = rez;
}

var s = calc(3, 5, '+'),
    r = calc(6, 12, '-');