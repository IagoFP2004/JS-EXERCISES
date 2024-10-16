var tablero = [
    [1, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

function disparar() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    mostrarTabla();

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {
            if (tablero[x][y] === 1) {
                console.log("true");

            } else {
                console.log("false");

            }
        }
    }
}

function mostrarTabla() {
    tabla=document.getElementById("tabla");
    tabla.innerHTML=" ";
    for (var i = 0; i < tablero.length; i++) {
        for (var j = 0; j < tablero[i].length; j++) {
            var celda = document.createElement("div"); 

            tabla.appendChild(fila);
            
        }
    }
}