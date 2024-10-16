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
    
    tablero.forEach(fila =>{
        fila.forEach(casilla=>{
            document.getElementById("tabla").innerHTML += `<table border="solid"><tr>${fila}</tr>`
        })
    })
    
    
    
    
    for(i=0; i<tablero.length; i++){
        for(j=0; j<tablero[i].length; j++){
           if(tablero[x][y]===1){
            console.log("true");
           }else{
            console.log("false");
            
           }
        }
    }
}