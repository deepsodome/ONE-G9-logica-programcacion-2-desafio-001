//crea variable de h1 camvia el texto al iniciar app
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío 1';

//nuestra mensaje en consola al pulsar botón consola
function mostarMensajeEnLaConsola() {
    console.log('Pulsaste el botón ¡CONSOLA!')
}

//al pulsar botón prompt lanza prompt para pedir nombre de ciudad y manda alert con mensaje
function mostrarAlerta2() {
    let ciudad = prompt("Por favor, dame el nombre de una ciudad de México:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");

//al pulsar botón alerta despliega aleta con mensaje
}function mostrarAlerta1(){
    alert("PROGRAMANDO en JavaScript");
} 

//al pulsar botón suma pide dos números y despliega la suma y resultado
function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Dame el primer numero a sumar'));
    let segunNumero = parseInt(prompt('Dame el segundo numero a sumar'));
    let resultado = primerNumero + segunNumero;
    alert(`${primerNumero} + ${segunNumero} = ${resultado}`)
}