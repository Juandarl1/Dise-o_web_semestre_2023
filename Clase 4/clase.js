console.log('hello world!!'); // Imprimir en consola

console.log(Math.random());

let edad;
let age = 20;
let mensaje='hola';
var mensaje2= mensaje;

console.log(mensaje.length);
/*
  Comentarios multilinea
*/


const moneda ='COP';
const numeroColumnas=4;
//numeroColumnas=8;

/* funcion de toda la vida */
function sumar(numero1, numero2){
    return numero1+numero2;

}

// Funcion anonima
const hola=function(){
    return 'hola';
}

//funcion de flecha
const sum=(numero1,numero2)=>{
    return numero1+numero2;
}

/* resultados*/
let resultado = sum(3,5)
console.log(resultado);


const multiplicacionDos= numero =>{
    return numero*2;
}

/* Tres funciones tipo flecha, sin parametros, 1 parametro, y reciba más de uno */
const sinParametros=() =>{
    mensaje3='Hola mundo';
    return mensaje3;
}

const parametro1 =(num1)=>{
    return num1*2
}

const parametroVarios=(nume1,nume2,nume3)=>{
    return nume1+nume2+nume3;
     
}

console.log(sinParametros());
console.log(parametro1(5));
console.log(parametroVarios(2,5,9));

//array= arreglo
let numeros=[1,2,3,4,5,6]

//ingresar un dato al final del arreglo
numeros.push(10);

//Saca el ultimo elemento
numeros.pop();