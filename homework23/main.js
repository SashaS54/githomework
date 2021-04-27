function suma() {
    let a = document.getElementById("suma_number1").value,
        b = document.getElementById("suma_number2").value,
        rez = 0;
    for (let i = a; i<=b; i++) {
        rez += parseInt(i);
    }
    document.getElementById("suma_rez") .innerText = rez;

}

function del() {
    let a = document.getElementById("del_number1").value,
    b = document.getElementById("del_number2").value,
    rez = '';
    
}