const boton = document.getElementById("cuadrado");
var imagen = document.getElementById("contenedor");


var presionado = null;

boton.onmousedown = pulsado;
boton.onmouseup = suelto;
document.onmousemove = redimensionar;

function pulsado(){
    presionado = true;
    console.log("Estoy pulsado");
}

function suelto(){
    presionado = null;
    console.log("No estoy pulsado");
}

function redimensionar(e){
    if(presionado){
        let x = e.pageX;
        let y = e.pageY;

        rec = imagen.getBoundingClientRect();

        imagen.style.width = `${x}px`;
        imagen.style.width = `${y}px`;
    }
}




