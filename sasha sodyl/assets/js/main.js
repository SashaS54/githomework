function plosha() {
    let osn = parseFloat(document.getElementById("osnova").value),
        h = parseFloat(document.getElementById("h").value);
        if (osn>0 && h>0) {
            let S = osn * h *0.5;
            document.getElementById("S").value = S;
        }else {
            alert("Не валідні дані");
        }
}


function bali() { 
    let rus = document.getElementById("rus"),
        eng = document.getElementById("eng"),
        fr = document.getElementById("fr"),
        dch = document.getElementById("dch"),
        ch = document.getElementById("ch"),
        jp = document.getElementById("jp"),
        ukr = document.getElementById("ukr"),
        rez = 0;
        if (rus.checked) {
            rez= rez + 100;
        } 
        if (eng.checked) {
            rez = rez + 200;
        }
         if (fr.checked) {
            rez = rez + 300;
        }
         if (dch.checked) {
            rez = rez + 400;
        }
         if (ch.checked) {
            rez = rez + 500;
        }
         if (jp.checked) {
            rez = rez + 600;
        }
         if (ukr.checked) {
            rez = rez + 1488;
        }
            document.getElementById("sum").value = rez;
}