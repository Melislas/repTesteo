"use strict";

let mensaje= document.getElementById("mensaje")
let boton= document.getElementById("click")
let mensajeUsuario=[]

boton.addEventListener("click",(e)=>{
    e.preventDefault();

    mensajeUsuario[0]=mensaje.value;

    let blob =  new Blob([mensajeUsuario], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "msjusuario.txt")


})