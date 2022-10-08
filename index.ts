//Desestructuracion de objetos

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 68,
  segundo: 30,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed Sheeran',
    anio: 2015,
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;
/*
console.log('El volumen es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La canción es: ', cancion);
console.log('El artista es: ', autor);
*/

//Desestructuracion de arreglos

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = dbz;

//console.log('El personaje es: ', p1)
//console.log('El personaje es: ', p2)
console.log('El personaje es: ', p3);
