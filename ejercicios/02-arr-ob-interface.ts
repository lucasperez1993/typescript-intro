let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

//interface sirve para manipular un objeto indicando el tipo de datos que puede recibir
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string; //? convierte nuestro objeto en opcional, puede estar o no
}

let personaje: Personaje = {
  nombre: 'Lucas',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing'],
};

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);
