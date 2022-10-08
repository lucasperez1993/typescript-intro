function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

//? argumento opcional, primero se mandan los argumentos obligatorios, base tiene por defecto un valor
//a menos que mandemos el argumento opcional y el de base puede cambiar

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

//let resultado = sumar(10, 10);

let resultado = multiplicar(2, 0, 10);
console.log(resultado);

interface PersonajeX {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

const nuevoPersonaje: PersonajeX = {
  nombre: 'Lucas',
  pv: 50,
  mostrarHp() {
    console.log('Puntos de vida: ', this.pv);
  },
};

function curarPersonajeX(personaje: PersonajeX, curar: number): void {
  personaje.pv += curar;
}

curarPersonajeX(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();
