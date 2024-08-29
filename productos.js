
"use strict";

let contenedor = document.getElementById("contenedor");
let productos = ["Palta", "Tomate", "Banana", "Brocoli", "Cebolla", "Lechuga", "Naranja", "Manzana", "Papa"];
let precios = [3700, 3700, 2500, 4000, 3000, 4000, 2000, 2000, 1500];
let stock = [13, 11, 10, 9, 14, 7, 12, 14, 12];
let imagenes = ["imagenes/palta.jpg", "imagenes/tomate.jpg", "imagenes/banana.jpg", "imagenes/brocoli.jpg",
    "imagenes/cebolla.jpg", "imagenes/lechuga.jpg", "imagenes/naranja.jpg", "imagenes/manzana.jpg",
    "imagenes/papa.jpg"];
let totalCompra=0;

function Productos(productos, precios, stock, imagenes) {
    for (let i = 0; i < productos.length; i++) {
        
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let img = document.createElement("img");
        img.setAttribute("src", imagenes[i]);
        img.setAttribute("alt", productos[i]);
        div.appendChild(img);

        let texto = document.createElement("p");
        let textoTexto=document.createTextNode( `${productos[i]} - Precio/Kg: $${precios[i]}`);
        texto.appendChild(textoTexto);
        div.appendChild(texto);

        let stockInfo = document.createElement("p");
        let contenidoStock=document.createTextNode( `Stock/Kg: ${stock[i]}`);
        stockInfo.setAttribute("id", `stock-${i}`);
        stockInfo.appendChild(contenidoStock);
        div.appendChild(stockInfo);

        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Cantidad";
        input.setAttribute("id", `input-${i}`);
        div.appendChild(input);

        let btn = document.createElement("button");
        let contenidoBoton=document.createTextNode("Agregar");
        btn.appendChild(contenidoBoton);
        div.appendChild(btn);
        btn.addEventListener("click", () => agregarProducto(i, input, stockInfo));

        contenedor.appendChild(div);
    }
}

let pCalcular = document.createElement("p");
let contenidoPcalcular=document.createTextNode("Total compra: $");
pCalcular.appendChild(contenidoPcalcular);
let divTotal=document.getElementById("total");
divTotal.appendChild(pCalcular);

function agregarProducto(index, input, stockInfo) {
    
    let cantidad = parseInt(input.value);
    
    if (cantidad > 0 && cantidad <= stock[index]) {
        let subtotal = cantidad * precios[index];
        totalCompra += subtotal;
        stock[index] -= cantidad;
        stockInfo.textContent = `Stock/Kg: ${stock[index]}`;
        input.value = "";
        alert("Compra añadida");
        pCalcular.innerHTML=`Total Compra:$${totalCompra}`;
    } else {
        alert('Cantidad inválida o sin stock.');
    }
}

Productos(productos, precios, stock, imagenes);




let mensaje= document.getElementById("mensaje")
let boton= document.getElementById("click")
let mensajeUsuario=[]

boton.addEventListener("click",(e)=>{
    e.preventDefault();

    mensajeUsuario[0]=mensaje.value;

    let blob =  new Blob([mensajeUsuario], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "msjusuario.txt")


})
