export const Catalogo={
    item1:'Consola de videoJuegos: PS5',
    precio1: 500,
    item2:'NoteBook Lenovo Advantage 530',
    precio2: 1000,
    caracteristica:{
        coloresDisponibles:'Blanco, Negro, Gris, Rojo',
        unidadesDisponibles:50
    },

    //Método
    ofrecerCatalogo: function () { 
        return `Hola, si estas buscando un(a) ${this.item1} o ${this.item2}, tenemos disponibles ${this.caracteristica.unidadesDisponibles} de cada una, el precío de la ${this.item1} es de ${this.precio1} y el precio
        de la ${this.item2} es de ${this.precio2} `
    },

    disponibles:function(){
        return `Los colores que hay para cada uno son las mismas, los colores disponibles son ${this.caracteristica.coloresDisponibles}`
    }
};

//accediendo al método
console.log(Catalogo.ofrecerCatalogo());
console.log(Catalogo.disponibles());

//2

export class musica{
    constructor(Cancion,artista){
        this.Cancion=Cancion;
        this.artista=artista;
    }
    //métodos
    autores(){
        return `${this.Cancion} es del artista: ${this.artista}`;

        }
}

//HERENCIA palabra clave extends
export class Musicas extends musica{
    constructor(Cancion,artista,duracion){
        super(Cancion,artista);
        this.duracion=duracion;
    }
    //método
    tiempoCancion(){
        return `Tiene una duracion de ${this.duracion} `;
    }
}

//crear un animal, especificamente
let canciones =new Musicas('dream on','Aerosmith',4.29);
console.log(canciones.autores());
console.log(canciones.tiempoCancion());

// 3
export const disponibles = () => {
    let canciones=new Musicas('Deep stone Lubally','Michael Salvatory and others',3.25,2020)
    console.log(canciones.autores());
    console.log(canciones.tiempoCancion());
 
 }
 
 console.log(disponibles());
 