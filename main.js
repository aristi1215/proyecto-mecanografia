let botones = document.querySelectorAll("button")
let IntervalGame;
let tiempoTotal = 10;
const empezo = document.getElementById("CapsLock");
const body = document.querySelector("body");
let contadorPuntos = parseInt(document.getElementById("contador-puntos").textContent);
let corazon1 = document.getElementById("corazon1");
let corazon2 = document.getElementById("corazon2");
let corazon3 = document.getElementById("corazon3");
let cantidadFallos = 0





botones.forEach(function(boton){
    boton.classList.add("key");
});

let indexAleatorio2 = Math.floor(Math.random()*botones.length);
botones[indexAleatorio2].classList.add("pulso-clase");
let currentboton = botones[indexAleatorio2];

function cambiarDeBoton(e){
    if(e.key.toLowerCase() == currentboton.id.toLowerCase()){

        currentboton.classList.remove("pulso-clase");
        let indiceAleatorio = Math.floor(Math.random()*botones.length);
        currentboton.removeEventListener("keydown",cambiarDeBoton);
        currentboton = botones[indiceAleatorio];
        currentboton.classList.add("pulso-clase");
        currentboton.addEventListener("keydown",cambiarDeBoton); 
        contadorPuntos += 10;
        console.log(contadorPuntos)
        document.getElementById("contador-puntos").textContent = contadorPuntos

    }else{
        alert("Mala tuya")
        currentboton.classList.remove("pulso-clase");
        let indiceAleatorio = Math.floor(Math.random()*botones.length);
        currentboton.removeEventListener("keydown",cambiarDeBoton);
        currentboton = botones[indiceAleatorio];
        currentboton.classList.add("pulso-clase");
        currentboton.addEventListener("keydown",cambiarDeBoton);
       
        cantidadFallos++
        console.log(cantidadFallos)

        if(true){
            corazon1.src = "imgs/corazonVacio.png"
        }

        if(cantidadFallos == 2){
            corazon2.src = "imgs/corazonVacio.png"
        }

        if(cantidadFallos == 3){
            corazon3.src = "imgs/corazonVacio.png"
            contadorPuntos = 0
            document.getElementById("contador-puntos").textContent = contadorPuntos;
            alert("you're dead")
        }
    }
  
    
}; 


body.addEventListener("keydown",cambiarDeBoton);



window.addEventListener("keydown",function(e){
    console.log(e.key);
})




//boceto del intervalo de tiempo
// function tecla (){    
//     let indiceAleatorio = Math.floor(Math.random()*botones.length)
//     botones[indiceAleatorio].classList.add("pulso-clase")
// }

// empezo.addEventListener("click",function(){
//     IntervalGame = setInterval(tecla,10000)
// })
