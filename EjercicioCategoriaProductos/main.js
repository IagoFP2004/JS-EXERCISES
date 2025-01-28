var productos = [];
var categorias = [];

async function getData() {
    await getProducts();
    await getCategories();
    showTable(productos, categorias);
}

async function getProducts() {
    try {
        const resultado = await fetch('productos.json');
        if (resultado.ok) {
            const data = await resultado.json();
            productos = data;
        }
    } catch (error) {
        console.error('Error en getProducts:', error);
    }
}

async function getCategories() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'categorias.xml', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let xmlDoc = xhr.responseXML;
                    if (xmlDoc) {
                        let categoria = xmlDoc.getElementsByTagName("categoria");
                        let categoriasArray = [];

                        for (let i = 0; i < categoria.length; i++) {
                            let id = categoria[i].getAttribute("id");
                            let nombre = categoria[i].getElementsByTagName("nombre")[0].textContent;

                            categoriasArray.push({ id: id, nombre: nombre });
                        }

                        categorias = categoriasArray;
                        resolve();
                    }
                }
            }
        };
        xhr.send();
    });
}

function showTable(array1, array2) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const tbody = document.createElement("tbody");

    const th1TXT = document.createTextNode("ID")
    const th2TXT = document.createTextNode("NOMBRE PRODUCTO")
    const th3TXT = document.createTextNode("NOMBRE CATEGORIA")

    th1.appendChild(th1TXT);
    th2.appendChild(th2TXT);
    th3.appendChild(th3TXT);
    

    let id_categoria_producto;
    let id_categoria;

    array1.forEach(producto => {
        id_categoria_producto = producto.categoriaId;
        array2.forEach(categoria => {
            id_categoria = categoria.id;

            if(id_categoria_producto == id_categoria){
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");

                const td1txt = document.createTextNode(`${producto.id}`);
                const td2txt = document.createTextNode(`${producto.nombre}`);
                const td3txt = document.createTextNode(`${categoria.nombre}`);

                td1.appendChild(td1txt);
                td2.appendChild(td2txt);
                td3.appendChild(td3txt);

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);

               
                table.appendChild(tr)
            }
        })
    });

    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
    table.appendChild(thead);
    document.body.appendChild(table);
}

getData();

