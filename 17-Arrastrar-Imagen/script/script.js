const imagen = document.getElementById("contenedor");
imagen.onmousedown = click;
document.onmousemove = mover;
imagen.onmouseup = soltar;
var movimiento = false;

function click(){
    movimiento = true;
    console.log("me muevo");
}

function soltar(){
    movimiento = false;
    console.log("no me muevo");
}

function mover(e){
    if(movimiento){
        let x = e.pageX;
        let y = e.pageY;

        imagen.style.marginTop = `${y-100}px`;
        imagen.style.marginLeft = `${x-100}px`;
    }
}