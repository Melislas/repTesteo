"use strict";

let nombre= document.getElementById("nombre");
let apellido= document.getElementById("apellido");
let email= document.getElementById("email");
let telefono= document.getElementById("telefono");
let btn= document.getElementById("enviar");
let informacion=[];

btn.addEventListener("click",(e) => {
    e.preventDefault();


 document.getElementById("errorNombre").innerHTML = "";
 document.getElementById("errorApellido").innerHTML = "";
 document.getElementById("errorEmail").innerHTML = "";
 document.getElementById("errorTelefono").innerHTML = "";

 if (nombre.value.trim() === "") {
     document.getElementById("errorNombre").innerHTML = "Nombre es obligatorio";
     return;
 }
 if (apellido.value.trim() === "") {
    document.getElementById("errorApellido").innerHTML = "Apellido es obligatorio";
     return;
 }
 if (email.value.trim() === "") {
    document.getElementById("errorEmail").innerHTML = "Email es obligatorio";
     return;
 }

 if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    document.getElementById("errorEmail").innerHTML = "Email debe tener un formato válido";
    return;
}
 if (telefono.value.trim() === "") {
    document.getElementById("errorTelefono").innerHTML = "Telefono es obligatorio";
     return;
 }
 if (!telefono.value.match(/^[0-9]{10}$/)) {
    document.getElementById("errorTelefono").innerHTML = "El telefono debe tener 10 digitos";
    return;
}

        informacion[0]=nombre.value;
        informacion[1]=apellido.value;
        informacion[2]=email.value;
        informacion[3]=telefono.value;
        informacion[4]=btn.value;

       let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"});

       saveAs(blob,"contact.txt")
})

let mensaje= document.getElementById("mensaje")
let boton= document.getElementById("click")
let mensajeUsuario=[]

boton.addEventListener("click",(e)=>{
    e.preventDefault();

    mensajeUsuario[0]=mensaje.value;

    let blob =  new Blob([mensajeUsuario], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "msjusuario.txt")


})



