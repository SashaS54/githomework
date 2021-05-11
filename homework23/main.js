function suma() {
    debugger
    let a = parseInt(document.getElementById("suma_number1").value),
        b = parseInt(document.getElementById("suma_number2").value),
        rez = 0;
    while (b>a) { 
        rez = rez + b;
        b--;
    }
    document.getElementById("suma_rez") .innerText = rez;

}

function del() {
    debugger
    let a = Math.abs(parseInt(document.getElementById("del_number1").value)),
        b = Math.abs(parseInt(document.getElementById("del_number2").value)),
        i = (Math.max(a,b));
    if (!isNaN(a) && !isNaN(b)){
        while (a%i!==0 || b%i!==0) {
            i--;
            rez = i;
        }
    }else {
        alert("Enter valid danes")
    }
    document.getElementById("del_rez").innerText = rez;
}


function allDel () {
    debugger
    let a = parseInt(document.getElementById("allDel_number").value),
        i = a;
        rez = '';
    while(i>0) {
        if (a%i == 0) {
            rez += i + ", "
        }
        i--;
    }
    document.getElementById("allDel_rez").innerText = rez;
}



function kolichestvo() {
    debugger
    let a = parseInt(document.getElementById("kolichestvo_number").value),
        i = 0,
        rez = 0;
    while(a >= 1) {
        a = a/10;
        i++;
        rez = i
    }
    document.getElementById("kolichestvo_rez").innerText = rez;
}



function statistika() {
    debugger
    let i = 1,
        pol = 0,
        otr = 0,
        par = 0,
        nepar = 0,
        nol = 0;
        do {
            let n = prompt(parseInt("Enter number"));
            i++;
            if ( n > 0) {
                pol++;
            }
            if (n <0) {
                otr++;
            }
            if (n%2 == 0) {
                par++;
            }
            if (n%2 != 0) {
                nepar++;
            }if (n == 0) {
                nol++;
            }
        }while (i <= 10 ) {
            let rez = `Положительные: ${pol}; otricatelnie: ${otr}; parnie: ${par}; neparnie: ${nepar}; nuli: ${nol};`;
            alert (rez);
        }
}

function calc() {
    do  {
        let number = prompt("Введите 2 числа и знак между ними  (number znak number)  "),
            arrT = number.split(" "),
            rez,
            a = parseFloat(arrT[0]),
            znak = arrT[1],
            b = parseFloat(arrT[2]);
        if (znak == "+") {
            rez = a+b;
            alert(rez);
        }else if (znak == "-"){
            rez = a-b;
            alert(rez);
        }else if (znak == "/") {
            rez = a/b;
            alert(rez);
        }else if (znak =="*") {
            rez = a*b;
            alert(rez);
        }else {
            alert ("not valids danes")
        }
         result = confirm ("еще 1 пример");
    }while (result === true)
}

function zdvig () {
    debugger
    let a = parseInt(document.getElementById("zdvig_number").value), //12345
        i = 0,
        z = a,
        k =parseInt(document.getElementById("zdvig_kol").value); 
    while(z >= 1) {
        z = z/10;
        i++; //5
    }
    let first = parseInt(10*a /  Math.pow(10, i));
    let second =(parseInt(100*a /  Math.pow(10, i)) - first*10)*10; 
    let chast = (a - parseInt(a/ Math.pow (10, (i-k)))*Math.pow(10, i-k))*100 + second + first; 
    alert (chast)
}











function day() {
    let i = 0;
    let result;
    do {
        i++;
        if (i == 1) {
            alert("Monday")
        }else if (i == 2) {
            alert("tuesday")
        }else if ( i == 3) {
            alert("wednesday");
        }else if (i == 4) {
            alert("thursday");
        }else if (i == 5) {
            alert("Friday")
        }else if (i == 6) {
            alert("satyrday")
        }else if (i == 7) {
            alert("Sunnday");
        }else if (i >7) {
            i = 0;
            alert("monday")
        }
        result = confirm("one more?")
    }while (result ===true)
}


function tablica() {
    debugger
    let number = parseInt(document.getElementById("tablica_number").value),
        rez = '';
    if (isNaN(number)){
        alert("Enter number")
    }else if (number >=2 && number <=9){
        
        for (let i = 1; i <=9;) {
            i++;
            rez += `<span style="width: 40px; height: 40px; border: 1px solid black; display: inline-block; text-align: center">${number * i}</span>`;
            
        }
    }
    else {
        alert("not valid danes")
    }
    document.getElementById("tablica_rez").innerHTML = rez;
    
}


