const displayValorAnterior=document.getElementById("valoranterior");
const displayValorActual=document.getElementById("valoractual");
//con esto selcciona todos los elementos que tengan la clase numeros
const numeros=document.querySelectorAll(".numeros");
const operadores=document.querySelectorAll(".operadores");

const display= new Display(displayValorAnterior, displayValorActual);

numeros.forEach(boton=>{
    boton.addEventListener('click', ()=>{
        display.agregarNumero(boton.innerHTML);
    });
});

operadores.forEach(boton=>{
    boton.addEventListener('click', ()=>{
        display.computar(boton.value);
    });
});