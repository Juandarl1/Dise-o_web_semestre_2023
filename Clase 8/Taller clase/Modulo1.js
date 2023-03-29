import { Musicas,disponibles } from './modulo2.js';


let canciones = new Musicas('dream on','Aerosmith',4.29);
console.log(canciones.autores());
console.log(canciones.tiempoCancion());

console.log(disponibles());