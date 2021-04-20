"use strict";

/*function myPow() {
    let number = parseInt(prompt("Enter number")),
        rez = Math.pow(number, 2);
    alert(rez);

}

function myAvg(){
    let number1 = perseInt(prompt("Enter number")),
        number2 = perseInt(prompt("Enter number")),
        rez = (number1 + number2)/2;
        alert(rez);
}

function myConver() {
    const k = 0.621371;
    let number = perseFloat(prompt("Enter km"));
    let rez = number* k;
    alert(rez); 
}

function myActions() {
    let number1 = perseInt(prompt("Enter number")),
        number2 = perseInt(prompt("Enter number"));
    let umnoz = number1*number2,
        podelit = number1/number2,
        slog = number1 + number2,
        vichest = number1 - number2;
    alert("произведение =" + umnoz + "деление =" + podelit + "сложение =") + slog + "вычетание =" + vichest;
}

function findX() {
    let a = parseInt(prompt("Enter number"));
    let b = parseInt(prompt("Enter number")),
        x = (-1*b)/a;
    alert (`a * x + b = 0, a = ${a}, b = ${b}, x = ${x}`);  
}

function time() {
    let hour = parsenInt(prompt("Enter hours")),
        minutes = parsenInt(prompt("Enter minut")),
        toMind = 24 - (hours - 1) + ":" + (60 - minutes);
        alert("До следующего дня осталось:" + toMind);

}
*/

/*
function middleNumber() {
    let x = parsentInt(prompt("Enter number"));
    let rez = parseInt((x % 100) / 10);
    alert(`${x} second char ${rez}`);

}

function lastToFirst() {
    let number = parseInt(prompt("Enter number")),
        rez = (number%10*100000)+ parseInt(number/10);
        alert(`Move ur last char to front ${number} => ${rez}`)
}
*/
function zarplata() {
  var number = parseFloat(prompt("Enter number"));
  var baza = 250;
  var proda = 0.1;
  var rez = baza + number * proda;
  alert(rez);
}