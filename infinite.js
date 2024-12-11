let botones = document.querySelectorAll("button")
let IntervalGame;
let tiempoTotal = 10;
const empezo = document.getElementById("CapsLock");
const body = document.querySelector("body");
let contadorPuntos = parseInt(document.getElementById("contador-puntos").textContent);
let corazon1 = document.getElementById("corazon1");
let corazon2 = document.getElementById("corazon2");
let corazon3 = document.getElementById("corazon3");
let cantidadFallos = 0;
let contador = 0;
let contadorGeneral = 0;
let audioBotones = document.getElementById("boton-presionado");
let botonCorrecto = document.getElementById("boton-correcto");
let botonIncorrecto = document.getElementById("boton-incorrecto");
let perdiste = document.getElementById("perdiste");
let musicaJuego = document.getElementById("musica-juego");
let controlVolumen = document.getElementById("control-volumen");


controlVolumen.addEventListener("input",function(){
    musicaJuego.volume = controlVolumen.value
})

botones.forEach(function(boton){
    boton.classList.add("key");
});

let indexAleatorio2 = Math.floor(Math.random()*botones.length);
botones[indexAleatorio2].classList.add("pulso-clase");
let currentboton = botones[indexAleatorio2];


function cambiarDeBoton(e){
    
    if(e.key.toLowerCase() == currentboton.id.toLowerCase()){
        audioBotones.play()
        currentboton.classList.remove("pulso-clase");
        currentboton.removeEventListener("keydown",cambiarDeBoton);
        let indiceAleatorio = Math.floor(Math.random()*botones.length);
        currentboton = botones[indiceAleatorio];
        currentboton.classList.add("pulso-clase");
        currentboton.addEventListener("keydown",cambiarDeBoton); 
        contadorPuntos += 10;
        contador = 0
        document.getElementById("contador-puntos").textContent = contadorPuntos
    }else{
        botonIncorrecto.play()
        currentboton.classList.remove("pulso-clase");
        let indiceAleatorio = Math.floor(Math.random()*botones.length);
        currentboton.removeEventListener("keydown",cambiarDeBoton);
        currentboton = botones[indiceAleatorio];
        currentboton.classList.add("pulso-clase");
        currentboton.addEventListener("keydown",cambiarDeBoton);
        contador = 0;
        if(contadorPuntos >= 20 ){

            contadorPuntos -=20;
        }
        document.getElementById("contador-puntos").textContent = contadorPuntos;
    }
  
    
}; 


body.addEventListener("keydown",cambiarDeBoton)

setInterval(()=>{
    contadorGeneral++
    console.log(contadorGeneral)
},1000)


let intervalo = setInterval(()=>{
    contador++
    console.log(contador)
    if(contador == 6 && contadorGeneral >= 10){
        contador= 0
        currentboton.classList.remove("pulso-clase");
        let indiceAleatorio = Math.floor(Math.random()*botones.length);
        currentboton.removeEventListener("keydown",cambiarDeBoton);
        currentboton = botones[indiceAleatorio];
        currentboton.classList.add("pulso-clase");
        currentboton.addEventListener("keydown",cambiarDeBoton);
    }else if (contador == 4 && contadorGeneral >= 60){
        contador= 0
        currentboton.classList.remove("pulso-clase")
        let indiceAleatorio = Math.floor(Math.random()*botones.length);
        currentboton.removeEventListener("keydown",cambiarDeBoton);
        currentboton = botones[indiceAleatorio];
        currentboton.classList.add("pulso-clase");
        currentboton.style.animationDuration = ".5s"
        currentboton.addEventListener("keydown",cambiarDeBoton);
    }else if(contador == 2 && contadorGeneral > 120){
        contador= 0
        currentboton.classList.remove("pulso-clase");
        let indiceAleatorio = Math.floor(Math.random()*botones.length);
        currentboton.removeEventListener("keydown",cambiarDeBoton);
        currentboton = botones[indiceAleatorio];
        currentboton.style.animationDuration = ".2s"
        currentboton.classList.add("pulso-clase");
        currentboton.addEventListener("keydown",cambiarDeBoton);
    }
},1000)


window.addEventListener("keydown",function(e){
    console.log(e.key);
    if(e.key == "Alt"){
        e.preventDefault()
    }
    if(e.key == "AltGraph"){
        e.preventDefault()
    }
})

