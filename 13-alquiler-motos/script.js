const HARLEYPRICE = 10;
const HONDAPRICE = 7;
const YAMAHAPRICE = 5;

var collectionDate = document.getElementById("fRecogida");
var deliveryDate = document.getElementById("fEntrega");

collectionDate.min = currentDate();


function finalPrice() {
    let dayPrice = getPrice();
    let days = calcularDiferenciaFechas();

    let priceToPay = dayPrice * days;

    document.getElementById("precio").innerHTML = priceToPay;
}

function calcularDiferenciaFechas() {
    var date1 = new Date(collectionDate.value).getTime();
    var date2 = new Date(deliveryDate.value).getTime();

    var diasRestantes = date2 - date1;
    var days = diasRestantes / (1000 * 60 * 60 * 24);

    return days;
}

function getPrice() {
    let price = 0;
    if (moto1.checked) {
        price = HARLEYPRICE;
    } else if (moto2.checked) {
        price = HONDAPRICE;
    } else {
        price = YAMAHAPRICE;
    }

    return price;
}

function currentDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    let day = date.getDate() <10 ? `0${date.getDate()+1}`:date.getDate()+1;

    return `${year}-${month}-${day}`;
}

collectionDate.addEventListener("change", function () {
    let date = new Date(collectionDate.value);
    date.setDate(date.getDate() + 1)

    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    let day = date.getDate() <10 ? `0${date.getDate()+1}`:date.getDate();

    deliveryDate.min=`${date.getFullYear()}-${month}-${day}`;
});
