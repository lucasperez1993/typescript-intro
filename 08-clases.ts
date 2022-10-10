class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  //private alterEgo: string, private solo se puede utilizar dentro de la misma clase
  //public edad: number, public se puede acceder a la variable desde fuera de la clñase
  //static nombreReal: string static se puede acceder al valor de la variable desde fuera de la clase

  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'New York USA'); //la llamada 'super' hace referencia al constructor de la clase extendida
  }
}

const ironman = new Heroe('Ironman', 45, 'Tony Stark');

console.log(ironman);
