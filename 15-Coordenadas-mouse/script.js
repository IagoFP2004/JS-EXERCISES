document.addEventListener("mousemove",coordenadas);

function coordenadas(e)
{
    let x = e.pageX
    let y = e.pageY
    document.getElementById("texto").style.marginTop = y + "px";
    document.getElementById("texto").style.marginLeft =x + "px";
}
setInterval(getDate,1000);
function getDate()
{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();
    document.getElementById("texto").innerHTML = `${hour}H:${min}M:${seg}S`
    
}
