function hello() {
    let name = prompt("Enter your name");
    alert (`Привет  ${name}`)
}

function Age() {
    let year = prompt("enter yaer of your birthday");
    if (year != '') {
        if(isNaN(year)) {
            alert("Enter valid year");
        }else {
            const thisYear = 2021;
            const minYear = 1850;
            if (year >= thisYear || year<minYear) {
                alert ("Enter real year");
            }else {
                let age = (thisYear - (year>>0));
                alert (age);
            }
        }
    }else {
        alert ("You didnt Enter year!!!!");
    }
}

function findPsquare() {
    let L = prompt("Enter side length") ;
    if (L != '' ) {
        if(isNaN(L)){
            alert ("enter corect lenght");
        }else {
            let P = (Math.floor(L*100)/100)*4;
            alert(`P = ${P}`);
        }
    }else {
        alert ("You didnt Enter lenght");
    }
}

function findPcircle() {
    let R = prompt("Enter Radius");
    if (R != '') {
        if(isNaN(R)){
            alert("not valid radius")
        }else {
            const pi = Math.PI;  //Я ЗНАЮ ЧТО МОЖНО БЕЗ ОБЬЯВЛЕНИЯ КОНСТАНТЫ ИСПОЛЬЗОВАТЬ MATH.PI, НО ТАК ДЛЯ ЗАДАНИЯ НУЖНО
            let P = Math.floor(pi*(Math.pow(R, 2))*100)/100;
            alert (`P = ${P}`);
        }
    }else {
        alert("You didnt Enter radius")
    }
}

function TimeToRoad() {
    let S = prompt ("Enter distanse between cityes"),
        T = prompt ("Enter time in hours");
    if (S != '' || T != ''){
        if (isNaN(S) || isNaN(T) || S<=0 || T<0) {
            alert ("Distance or time is not valid")
        }else {
            let V;
            V = Math.floor(S/T*100)/100;
            alert(`V = ${V} km/h`)
        }
    }else {
        alert("You didnt enter time or distanse")
    }
}

function conventor () {
    let D = prompt("Enter USD");
    if (D != '') {
        if (isNaN(D) || (D < 0) ) {
            alert("not valid number")
        }else {
            const E = 0.9;
            let soum = Math.floor(D*0.9*100)/100;
            alert(`EUR = ${soum}`)
        }
    }else {
        alert("You didnt enter USD")
    }
}

function memory () {
    let mem = prompt("Enter memory in gb");
    if (mem != ''){
        if((isNaN(mem)) || (mem < 0)){
            alert(`Enter valid number`);
        }else {
            const mb = 1024,
            apl = 800;
            let n;
            n = ((mem*mb)-(mem*mb)%800)/apl ;
            alert(`${n}`);
        }
    }else {
        alert("You didnt enter memory");
    }
}

function chocolate () {
    debugger
    let n = parseInt(prompt("Enter quantity"));
    let cost = prompt("Enter cost of chocolate");
    if ((n != '') && (cost != '')) {
        if ((n > 0) && (cost > 0)) {
        let nCan = Math.floor(n/cost),
        deliv = Math.floor(n%cost);
        alert (`You can buy ${nCan} chockolates;  your delive ${deliv }`)
        }else {
            alert("enter corect number")
        }
    }else {
        alert("You didnt enter cost or quantity");
    }
}


function revers () {
    debugger
    let n = prompt("Enter three-digid number");
    if (n != '') {
        if((n >= 101) && (n <=999)) {
            nRevers = ((n % 10) * 100) + ((n % 100) - (n % 10)) + ((n - n%100)*0.01);
            alert (`${n} <--> ${nRevers}`);
        }else {
            alert ("Not valid number")
        }
    }else {
        alert("You didnt enter number");
    }
}

function revers2_0 () {
    let n = prompt("Enter three-digid number");
    if (n != '') {
        if((n >= 101) && (n <=999)) {
            nRevers = (n - (Math.floor(n* 0.1))*10)*100 + ((Math.floor((n - ((Math.floor(n*0.01))*100))*0.1)))*10 + Math.floor(n*0.01);
            alert (`${n} <--> ${nRevers}`);
        }else {
            alert ("Not valid number")
        }
    }else {
        alert("You didnt enter number");
    }
}
function bank () {

    let money = parseFloat(prompt("How much"));
    if (money != '') {
        if (money > 0) {
            const procent = 0.05;
            let suma =((money * procent) + money) + (money + (money*procent))*procent; 
            alert (suma);
        }else {
            alert("enter corect values");
        }
    }else {
        alert("You didnt enter values");
    }
}


//==================================================================homework 2============================================================================