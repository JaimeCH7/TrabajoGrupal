//este script es para mover las cajas contenedoras del formulario de registro/login
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", registro);

window.addEventListener("resize", anchoPagina);
//declaramos variables
var contenedor_inicio_registro = document.querySelector(".contenedor__inicio-registro");
var formulario_inicio =document.querySelector(".formulario__inicio");
var formulario_registro =document.querySelector(".formulario__registro");
var caja_trasera_inicio =document.querySelector(".caja__trasera-inicio");
var caja_trasera_registro =document.querySelector(".caja__trasera-registro");

function anchoPagina(){
    if(window.innerWidth>850){
        caja_trasera_inicio.style.display = "block";
        caja_trasera_registro.style.display = "block";
    }else{
        caja_trasera_registro.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_inicio.style.display = "none";
        formulario_inicio.style.display = "block";
        formulario_registro.style.display = "none";
        contenedor_inicio_registro.style.left = "0px";
    }
}
anchoPagina();

function registro(){
    if(window.innerWidth>850){
        formulario_registro.style.display ="block";
        contenedor_inicio_registro.style.left = "425px";
        formulario_inicio.style.display = "none";
        caja_trasera_registro.style.opacity = "0";
        caja_trasera_inicio.style.opacity = "1";
    }else{
        formulario_registro.style.display ="block";
        contenedor_inicio_registro.style.left = "0px";
        formulario_inicio.style.display = "none";
        caja_trasera_registro.style.display = "none";
        caja_trasera_inicio.style.display = "block";
        caja_trasera_inicio.style.opacity = "1";
    }

}

function iniciarSesion(){
    if(window.innerWidth>850){
        formulario_registro.style.display ="none";
        contenedor_inicio_registro.style.left = "25px";
        formulario_inicio.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_inicio.style.opacity = "0";
    }else{
        formulario_registro.style.display ="none";
        contenedor_inicio_registro.style.left = "0px";
        formulario_inicio.style.display = "block";
        caja_trasera_registro.style.display = "block";
        caja_trasera_inicio.style.display = "none";    
    }
    
}
