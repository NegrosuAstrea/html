

let consumo = prompt('Ingrese el consumo en Kwh: ');
consumo_ingresado = parseFloat(consumo);

let tarifaUno = 0;
let tarifaDos = 0;
let tarifaTres = 0;
let total = 0;

if (consumo_ingresado >= 601){
    tarifaTres = (consumo_ingresado - 600) * 5;
    consumo_ingresado = 600;
}
if(consumo_ingresado >= 301 && consumo_ingresado < 601){
    tarifaDos = (consumo_ingresado - 300) * 3;
    consumo_ingresado = 300;
}

if(consumo_ingresado > 0 && consumo_ingresado <= 300){
    tarifaUno = consumo_ingresado;
}


total = tarifaUno + tarifaDos + tarifaTres;
alert("El recibo de tu tarifa es el siguiente: \n"
 + "Tarifa 1: " + `$${tarifaUno}`
 + "\nTarifa 2: " + `$${tarifaDos}`
 + "\nTarifa 3: " + `$${tarifaTres}`
 + "\nTotal: " + `$${total}`); 

 