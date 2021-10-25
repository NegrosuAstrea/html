

let divs = document.getElementsByTagName("div");

let buttons = document.getElementsByTagName("button");
let imgs = document.getElementsByTagName("img")

divs[0].style.display = "flex";

let bandera = false;
let repeticion = 0;



buttons[0].addEventListener("click", function(){
    if(divs[0].style.display == "flex"){
        divs[0].style.display = "none";
        divs[1].style.display = "none";
        divs[2].style.display = "flex";
    }else if (divs[1].style.display == "flex"){
        divs[0].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
    }else if (divs[2].style.display == "flex"){
        divs[0].style.display = "none";
        divs[1].style.display = "flex";
        divs[2].style.display = "none";
    }
} ,false)


buttons[1].addEventListener("click", function(){
    if(divs[0].style.display == "flex"){
        divs[0].style.display = "none";
        divs[1].style.display = "flex";
        divs[2].style.display = "none";
    }else if (divs[1].style.display == "flex"){
        divs[0].style.display = "none";
        divs[1].style.display = "none";
        divs[2].style.display = "flex";
    }else if (divs[2].style.display == "flex"){
        divs[0].style.display = "flex";
        divs[1].style.display = "none";
        divs[2].style.display = "none";
    }
} ,false)


function cambiar() {
    if(bandera == false){      
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.display = "none";
        }
        repeticion++;
        if (repeticion > divs.length) {
            repeticion = 1;
        }
        divs[repeticion-1].style.display = "flex";
    }
    setTimeout(cambiar, 3000); //Cambio cada 3 segundos
    
}


for (let index = 0; index < imgs.length; index++) {
    imgs[index].addEventListener("mouseleave", function(){
        bandera = false;
    }, false)
    
}

for (let index = 0; index < imgs.length; index++) {
    imgs[index].addEventListener("mouseenter", function(){
        bandera = true;
    }, false)
    
}


cambiar()