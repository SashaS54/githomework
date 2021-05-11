function sravnenie(a, b) {
    if(a-b >0) {
        return 1;
    }else if (a-b <0) {
        return -1;
    }else if (a-b ===0) {
        return 0;
    }else {
        false
    }
}


function sravnit () {
    debugger
    let a = parseInt(document.getElementById("sravnit_number1").value),
        b = parseInt(document.getElementById("sravnit_number2").value),
        rez =  sravnenie(a, b) ;
        document.getElementById("sravnit_rez").innerText = rez;
}



function fac(a) {
    if (a > 0) {
        let rez = 1;
        do {
            rez = rez * a;
            a--;
        }while (a>0) {

        }
        return rez;
    }else {
        return false;
    }
}


function fact() {
    let a = parseInt(document.getElementById("fact_number1").value),
    rez = fac(a);
    document.getElementById("fact_rez").innerText = rez;
}





function toH(a, b, c) {
    a = a*100;
    b = b*10;
    let rez = a+b+c;
    return rez
}


function toHundreds() {
    debugger
    let numbers = document.getElementById("toHundreds_number1").value,
        arrT = numbers.split(','),
        a = parseInt(arrT[0]),
        b = parseInt(arrT[1]),
        c = parseInt(arrT[2]);
        let rez = toH(a, b, c);
        document.getElementById("toHundreds_rez").innerText = rez
}



function plosha(a, b) {
    debugger
    let rez;
    if(a>0 && b>0) {
         rez = a*b;
        return rez
    }else if (a>0 && b === '') {
        rez = a*a;
        return rez
    }else {
        return false
    }
}




function pl() {
    debugger
    let a = (document.getElementById("pl_number1").value),
        b = (document.getElementById("pl_number2").value),
        rez = plosha(a, b);
        if (rez === false) {
            alert("mot valid danes")
        }else {
            document.getElementById("pl_rez").innerText = rez;
        }
}



function alldel(a) {
    if (!isNaN(a)){
        let rez = 0;
        let i = a
        do {
            if (a%i ===0) {
            rez = rez + i ;
            }
            i--;
        }while (i > 0 )  {

        }
        return (rez - a)
    }else {
        return false
    }
}

function perfect(a) {
    debugger
    if (a === alldel(a)) {
        return true;
    }else {
        return false
    }
}

function perf() {
    debugger
    let a = parseInt(document.getElementById("perf_number1").value);

    if (perfect(a)  === true) {
        document.getElementById("perf_rez").innerText = 'perfect';
    }
    if (perfect(a)  === false) {
        document.getElementById("perf_rez").innerText = ` not perfect` ;
    }
}




function perf_diapazon(a, b) {
    debugger

let rez = '';
    do{
        if (perfect(b) === true){
            rez += b + ';';
        }
        b--;  
    }while (a!=b);
    return rez
}


function diapazon() {
    debugger
    let a = parseInt(document.getElementById("diapazon_number1").value),
        b = parseInt(document.getElementById("diapazon_number2").value),
        rez = perf_diapazon(a, b);
        document.getElementById("diapazon_rez").innerText = rez;
}



 

function add_zero(s, m, h) {
    debugger
    if (m<10 && m>= 0) {
        m= "0" + m
    }
    if (s<10 && m>=0) {
        s= '0' + s
    }
    return time_style(s, m, h)
}

function time_style (s, m, h ) {
    debugger
    let rez = `${h}:${m}:${s}`;
    return rez
}


function time_calc (s, m, h) {
    if (isNaN(h)){
        h = 0;
    }
    if (isNaN(s)) {
        s = 0
    }
    if ( isNaN(m)) {
        m = 0
    }
    debugger
    m = m + parseInt(s/60);
    s = s%60;
    h = h + parseInt(m/60);
    m = m%60;

    rez = add_zero(s,m,h)
    return rez
}


function time() {
    debugger
    let h = parseInt(document.getElementById("hours").value),
        m = parseInt(document.getElementById("minutes").value),
        s = parseInt(document.getElementById("seconds").value);
        
       let rez = time_calc(s, m, h);
       document.getElementById("time").innerText = rez
        
}



function time_seconds() {
    debugger
    let s = parseInt(document.getElementById("sec").value);
    let rez = time_calc(s);
    document.getElementById("time_seconds_rez").innerText = rez;


}



function seconds_to_time(s,m,h) {
    let rez = s + m*60+ h*3600;
    return rez
}




function timeinseconds() {
    debugger
    let time = document.getElementById("timeinseconds_time").value,
    arrT = time.split(':'),
    h = parseInt(arrT[0]),
    m = parseInt(arrT[1]),
    s = parseInt(arrT[2]),
    rez = seconds_to_time(s, m, h);
    document.getElementById("timeinseconds_rez").innerText = rez
}




function time_raznica_main() {
    debugger
    let time1 = document.getElementById("time1").value,
        arrT1 = time1.split(':'),
        h1 = parseInt(arrT1[0]),
        m1 = parseInt(arrT1[1]),
        s1 = parseInt(arrT1[2]),
        time2 = document.getElementById("time2").value,
        arrT2 = time2.split(':'),
        h2 = parseInt(arrT2[0]),
        m2 = parseInt(arrT2[1]),
        s2 = parseInt(arrT2[2]),
        timeinsec1 = seconds_to_time(s1,m1,h1),
        timeinsec2 = seconds_to_time(s2,m2,h2),
        time_raznicaq = time_raznica(timeinsec1, timeinsec2);
    let time_raznica_corect = time_calc(time_raznicaq); 

        document.getElementById("time_raznica_rez").innerText = time_raznica_corect;
}

function time_raznica(t1,t2) {
    debugger
    let rez = Math.abs(t1 - t2);
    return rez;
}



