

let caja = document.getElementById("expresion")

//let turnOnb = document.getElementById("turn_on")
//let turnOff = document.getElementById("turn_off")

let buttons = document.getElementsByClassName("teclas")

let expresion = "";

for (let index = 0; index < buttons.length; index++) {
    buttons[index].disabled = true;
}


function turnOn(){
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].disabled = false;
        buttons[index].style.backgroundColor = "#03CFA7";
    }
    caja.style.backgroundColor = "#40CE20";
}

function turnOff(){
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].disabled = true;
        buttons[index].style.backgroundColor = null;
    }
    caja.value = "";
    caja.style.backgroundColor = "gray"
}


for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function(){
        if (buttons[index].value == "CLR"){
            caja.value = "";
            expresion = "";
        } else if (buttons[index].value == "="){
            if (expresion.length < 1){
                caja.value = 0;
                expresion = ""
            }else{
                caja.value = eval(expresion);
                expresion = "";
            }

        }else if (buttons[index].value == "x") {
            caja.value = "x";
            expresion = expresion + "*";
        }else{
            caja.value = buttons[index].value
            expresion = expresion + caja.value 
        }
    } ,false)
}