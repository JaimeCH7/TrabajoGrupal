//script para cambiar estilo de la pagina
const boton = document.getElementById('cambiar-estilo');
var num=1;


boton.addEventListener('click', () => {
    if(num%2==1){
        document.body.style.backgroundColor='white';
        var navbar = document.getElementById("navbar");
        navbar.style.backgroundColor = "black";
        num=num+1;
    }else{
        document.body.style.backgroundColor='black';
        var navbar = document.getElementById("navbar");
        navbar.style.backgroundColor = "gray";
        num=num+1;
    }
});
