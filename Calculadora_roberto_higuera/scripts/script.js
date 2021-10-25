
 let elements = document.getElementsByClassName("buttons");
 let labels = document.getElementsByTagName("label");
 let inputs = document.getElementsByTagName("input");
 let results = document.getElementsByClassName("resultado");
 let valuesProm;
 let elementsProm = document.getElementsByClassName("promOption");
 

//Función  que borra los elementos iniciales para dejar únicamente los botones
function main(){ 
    for (let index = 0; index < elements.length; index++) {
        elements[index].hidden = true;
    }

    
    for (let index = 0; index < labels.length; index++) {
        labels[index].hidden = true;
    }

    
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].hidden = true; 
    }

    for (let index = 0; index < results.length; index++) {
        results[index].hidden = true;
        
    }

    for (let index = 0; index < elementsProm.length; index++) {
        elementsProm[index].hidden = true;
        
    }
}


function opSuma(){
    main();
    elements[0].hidden = false;

    
    for (let index = 0; index < labels.length; index++) {
        labels[index].hidden = false;
    }

    
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].hidden = false; 
    }

    for (let index = 0; index < elementsProm.length; index++) {
        elementsProm[index].hidden = true;   
    }

    document.getElementById("values_ingresados").hidden=true;
    document.getElementById("saltoDesv").hidden=true;
    document.getElementById("salto2Desv").hidden=true;
}

function suma(){
    if(document.getElementsByClassName("resultado").length>0){
        let remove = document.getElementsByClassName("resultado");
        document.getElementsByTagName("main")[0].removeChild(remove[0]);
    }
    let resultado = document.createElement("h2");
    resultado.className = "resultado";
    
    resultado.innerText = "Resultado: " + (Number(document.getElementById("numUno").value) + Number(document.getElementById("numDos").value));

    document.getElementsByTagName("main")[0].appendChild(resultado);

}


function opResta(){
    main();
    elements[1].hidden = false;

    
    for (let index = 0; index < labels.length; index++) {
        labels[index].hidden = false;
    }

    
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].hidden = false; 
    }

    for (let index = 0; index < elementsProm.length; index++) {
        elementsProm[index].hidden = true;
        
    }

    document.getElementById("values_ingresados").hidden=true;
    document.getElementById("saltoDesv").hidden=true;
    document.getElementById("salto2Desv").hidden=true;
}

function resta(){
    if(document.getElementsByClassName("resultado").length > 0){
        let remove = document.getElementsByClassName("resultado");
        document.getElementsByTagName("main")[0].removeChild(remove[[0]]);
    }
    let resultado = document.createElement("h2");
    resultado.className = "resultado";
    
    resultado.innerText = "Resultado: " + (Number(document.getElementById("numUno").value) - Number(document.getElementById("numDos").value));

    document.getElementsByTagName("main")[0].appendChild(resultado);

}


function opMult(){
    main();
    elements[2].hidden = false;

    
    for (let index = 0; index < labels.length; index++) {
        labels[index].hidden = false;
    }

    
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].hidden = false; 
    }

    for (let index = 0; index < elementsProm.length; index++) {
        elementsProm[index].hidden = true;
        
    }
    document.getElementById("values_ingresados").hidden=true;
    document.getElementById("saltoDesv").hidden=true;
    document.getElementById("salto2Desv").hidden=true;
}

function mult(){
    if(document.getElementsByClassName("resultado").length > 0){
        let remove = document.getElementsByClassName("resultado");
        document.getElementsByTagName("main")[0].removeChild(remove[[0]]);
    }
    let resultado = document.createElement("h2");
    resultado.className = "resultado";
    
    resultado.innerText = "Resultado: " + (Number(document.getElementById("numUno").value) * Number(document.getElementById("numDos").value));

    document.getElementsByTagName("main")[0].appendChild(resultado);

}


function opDiv(){
    main();
    elements[3].hidden = false;
    
    for (let index = 0; index < labels.length; index++) {
        labels[index].hidden = false;
    }

    
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].hidden = false; 
    }

    for (let index = 0; index < elementsProm.length; index++) {
        elementsProm[index].hidden = true;
        
    }
    document.getElementById("values_ingresados").hidden=true;
    document.getElementById("saltoDesv").hidden=true;
    document.getElementById("salto2Desv").hidden=true;
}

function div(){
    if(document.getElementsByClassName("resultado").length > 0){
        let remove = document.getElementsByClassName("resultado");
        document.getElementsByTagName("main")[0].removeChild(remove[[0]]);
    }
    let resultado = document.createElement("h2");
    resultado.className = "resultado";
    
    resultado.innerText = "Resultado: " + (Number(document.getElementById("numUno").value) / Number(document.getElementById("numDos").value));

    document.getElementsByTagName("main")[0].appendChild(resultado);

}


function opProm(){
    main();
    elements[4].hidden = false;

    valuesProm = Number(prompt("Ingrese la cantidad de valores: "));

    for (let index = 0; index < valuesProm; index++) {
        let label = document.createElement("label");
        let num = document.createElement("input");
        let salto = document.createElement("br");
        let salto2 = document.createElement("br");
        num.type = "number";
        num.min = "1";
        num.max = "99";
        num.value = "1";
        num.step = "1";
        num.id = `num${index}`
        num.className = "promOption";
        label.className = "promOption";
        salto.className = "promOption";
        salto2.className = "promOption";
        label.innerText = `Num${index+1}`;
        label.style.marginRight = "10px";
        document.getElementsByTagName("main")[0].insertBefore(label, document.getElementById("promedia"));
        document.getElementsByTagName("main")[0].insertBefore(num, document.getElementById("promedia"));
        document.getElementsByTagName("main")[0].insertBefore(salto, document.getElementById("promedia"));
        document.getElementsByTagName("main")[0].insertBefore(salto2, document.getElementById("promedia"));
    }
    document.getElementById("values_ingresados").hidden=true;
    document.getElementById("saltoDesv").hidden=true;
    document.getElementById("salto2Desv").hidden=true;
}

function prom(){
    if(document.getElementsByClassName("resultado").length > 0){
        let remove = document.getElementsByClassName("resultado");
        document.getElementsByTagName("main")[0].removeChild(remove[[0]]);
    }

    let resultado = 0;
    console.log(valuesProm);
    for (let index = 0; index < valuesProm; index++) {
        resultado += Number(document.getElementById("num" + index).value);
    }

    resultado = resultado / valuesProm;

    let lresultado = document.createElement("h2");
    lresultado.className = "resultado";
    
    lresultado.innerText = "Resultado: " + (Number(resultado));

    document.getElementsByTagName("main")[0].appendChild(lresultado);

}


function opDesv() {
    main();

    if(document.getElementById("values_ingresados") != null){
        let remove = document.getElementById("values_ingresados");
        document.getElementsByTagName("main")[0].removeChild(remove);
    }
    if(document.getElementById("saltoDesv") != null){
        let remove = document.getElementById("saltoDesv");
        document.getElementsByTagName("main")[0].removeChild(remove);
    }
    if(document.getElementById("salto2Desv") != null){
        let remove = document.getElementById("salto2Desv");
        document.getElementsByTagName("main")[0].removeChild(remove);
    }

    elements[5].hidden = false;

    let valores_ingresados = document.createElement("input");
    let salto = document.createElement("br");
    let salto2 = document.createElement("br");

    valores_ingresados.id="values_ingresados";
    salto.id="saltoDesv";
    salto2.id="salto2Desv";

    valores_ingresados.placeholder = "Ingrese los valores por ,";

    document.getElementsByTagName("main")[0].insertBefore(valores_ingresados, document.getElementById("desviacion"));
    document.getElementsByTagName("main")[0].insertBefore(salto, document.getElementById("desviacion"));
    document.getElementsByTagName("main")[0].insertBefore(salto2, document.getElementById("desviacion"));
}

function desv_std(){
    if(document.getElementsByClassName("resultado").length > 0){
        let remove = document.getElementsByClassName("resultado");
        document.getElementsByTagName("main")[0].removeChild(remove[[0]]);
    }

    let valores = document.getElementById("values_ingresados").value.split(',').map(Number);

    let suma = 0;
    let media = 0;
    let squareDif = 0;
    let desviacion = 0;
    valores.forEach(function(value, index, array){
        suma += value;
    });

    media = suma / valores.length;


    valores.forEach(function(value, index, array){
        squareDif += Math.pow(value - media, 2)
    });

    media = squareDif / valores.length;

    desviacion = Math.sqrt(media);

    let resultado = document.createElement("h2");
    resultado.className = "resultado";
    
    resultado.innerText = "Resultado: " + Number(desviacion);

    document.getElementsByTagName("main")[0].appendChild(resultado);
}
