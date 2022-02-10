//var listaReproduccion = ["%PUBLIC_URL%/_dist_/Morat.mp4"]
var posicion = 0;
var vreproductor = document.getElementById("reproductor");
var origen = vreproductor.getElementsByTagName("source")[0];
var vbtnReproducir = document.getElementById("btnReproducir");
var vbtnpausa = document.getElementById("btnPausa");
var vbtnDetener = document.getElementById("btnDetener");
//origen.src = listaReproduccion[posicion];
vreproductor.load();

vbtnReproducir.addEventListener("click",reproducir);
vbtnpausa.addEventListener("click",pausa);
vbtnDetener.addEventListener("click",detener);


function reproducir(){
    vreproductor.play();
}

function pausa(){
    vreproductor.pause();
}
function detener(){
    vreproductor.pause();
    vreproductor.currentTime = 0;
}

