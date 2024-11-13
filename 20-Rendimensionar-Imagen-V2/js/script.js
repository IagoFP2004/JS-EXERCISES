const boton = document.getElementById("cuadrado");
var imagen = document.getElementById("contenedor");

var key = "r"
var presionado = null;

document.addEventListener("keydown", mostrar);
document.addEventListener("keyup", remove);

boton.addEventListener("mousedown",pulsado)
boton.addEventListener("mouseup",suelto)
document.addEventListener("mousemove",redimensionar)

function pulsado() {
    presionado = true;
    console.log("Estoy pulsado"); 
}

function suelto() {
    presionado = null;
    console.log("No estoy pulsado");
}

function redimensionar(e) {
    if (presionado) {
        let x = e.pageX;
        let y = e.pageY;

        imagen.style.width = `${x}px`;
        imagen.style.height = `${y}px`;
    }r
}r

function mostrar(e) {
    document.addEventListener("mousemove",redimensionar)
    if (e.key === key) {
        boton.style.width = `20px`;
        boton.style.height = `20px`;
        boton.style.backgroundColor = `black`;
    }
}

function remove() {
    document.removeEventListener("mousemove", redimensionar)
    boton.style.width = ``;
    boton.style.height = ``;
}