

let valores_ingresados = prompt('Ingresa los valores: ');

let valores = valores_ingresados.split(',').map(Number);


let media = 0;
let suma = 0;
let counter = 0;
let squareDif = 0;
let desviacion = 0;

valores.forEach(function(value, index, array){
    suma += value;
    counter++;
});

media = suma / counter;


valores.forEach(function(value, index, array){
    squareDif += Math.pow(value - media, 2)
});

media = squareDif / counter;

desviacion = Math.sqrt(media);

alert('El resultado de la desviación estandar es: ' + `${desviacion}`)
