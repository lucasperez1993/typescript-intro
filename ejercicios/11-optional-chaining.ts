interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'Lucas',
};

const pasajero2: Pasajero = {
  nombre: 'Emmanuel',
  hijos: ['A', 'B', 'C'],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);
