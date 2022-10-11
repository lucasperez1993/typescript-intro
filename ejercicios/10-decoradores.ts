function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = 'ABC123';
  imprimir() {
    console.log('Hola Mundo');
  }
}

const miClase = new MiSuperClase();

console.log(MiSuperClase);

console.log(miClase);
