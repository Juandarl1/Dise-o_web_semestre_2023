//obejtos
const persona={
    primerNombre:'Juan',
    apellido:'Perez',
    edad:22,
    documentoIdentidad: 5612,
    caracteristica:{
        colorCabello:'rojo',
        etnicidad:'Indouropeo',
        idiomaMaterno:'Español'
    },

    //Método
    saludar:function(){
        return `hola ${this.primerNombre} ${this.apellido}`
    }
};
//accediendo al método
console.log(persona.saludar());
//acceder a una propiedad. Forma 1
console.log(persona.apellido);
//acceder a una propiedad. Segunda forma
console.log(persona['primerNombre']);

console.log(persona);


//clases

class Persona {
    constructor(primerNombreUsuario,apellidoUsuario){
        this.primerNombreUsuario=primerNombreUsuario;
        this.apellidoUsuario=apellidoUsuario;
    }
    //método
    saludarPersona(){
        return `Hola ${this.primerNombreUsuario} ${this.apellidoUsuario}`
    }
}

//voy a usar la clase para construir una persona (objeto)
let personita=new Persona('Juan','David');
personita.primerNombreUsuario='Carlos';
personita.apellidoUsuario='Cantor';
console.log(personita);
console.log(personita.saludarPersona());

//Herencia
class animales{
    constructor(animal1,edad,sonido){
        this.animal1=animal1;
        this.edad=edad;
        this.sonido=sonido;
    }
    //métodos
    sonido(){
        return `${this.animal1} tiene el sonido: ${this.sonido}`;

        }
}

//HERENCIA palabra clave extends
class Gatos extends animales{
    constructor(animal1,edad,sonido,caza){
        super(animal1,edad,sonido);
        this.caza=caza;
    }
    //método
    maullar(){
        return `Yo puedo hacer el sonido ${this.sonido} `;
    }
}

//crear un animal, especificamente
let gato=new Gatos('misifus',52,'Meow',false);
console.log(gato);
console.log(gato.maullar());


//Tarea

/* 
1. Crear un objeto que tenga mínimo dos metodos
    ademas debe tener una propiedad que sea un objeto.

2. Crear una clase que herede de otra.
    debe poseer mínimo 3 propiedades para el constructor.


3. Crear una función tipo flecha que haga uso de la clase
    construida y el objeto declarado.

*/ 

// 1.
const Catalogo={
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

class musica{
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
class Musicas extends musica{
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


