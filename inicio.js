let musicaInicio = document.getElementById("musica-inicio");
let controlVolumen = document.getElementById("control-volumen");
console.log(musicaInicio);
console.log(controlVolumen)

controlVolumen.addEventListener("input",function(){
    musicaInicio.volume = controlVolumen.value
})