// Funcion tipo flecha
let sumar=(number)=>{
    return number +5;
}
//llamo la funcion sumar
let f=sumar;
console.log(f(5));// usando f
console.log(sumar(5));// usando sumar


/* Callback functions
* Se trata de enviarle como parámetro de entrada en una función
* en otra función
*
*/

const esPar= (numero)=>{
    return numero%2 ==0; // Regresa un booleano
}

const validarParidad=(num,callbackFN)=>{
    const esPar=callbackFN(num);
    console.log('El numero es entero? : '+esPar);

}

validarParidad(9,esPar)

const dividePorDos =(numero)=>{return numero/2;}

const divideNumero=(numero,callbackFn)=>{
    return callbackFn(numero);
}

console.log(divideNumero(10,dividePorDos))

/* metodos para arreglos */

const numeros=[1,2,3,20,893,452];
let numerosDos=[1,2,3,20,893,452];

//.reduce()
const sumarValores = numeros.reduce((acumulador,valorActual)=>{
    return acumulador+valorActual;
});

console.log(sumarValores);

//.forEach()

const fnDos=numerosDos.forEach(number =>{
    console.log(number);
});

//.filter()

const fnTres=numerosDos.filter(number=>{
    //como voy a filtrar, la condición
    return number >10;
});

console.log(fnTres);

//.map()

const nombresPersonas=['juan','sergio','andres'];

const anuncios =nombresPersonas.map(miembro=>{
    return miembro+' se unio al grupo ';

});

console.log(anuncios)


const multiplicarPorDos =(numero)=>{return numero*2;}

const multiplicaNumero=(numero,callbackfN)=>{
    return callbackfN(numero);
}

console.log(multiplicaNumero(10,multiplicarPorDos))
