import { calcularISV, Producto } from './06-desestructuracion-funciones';

const carritoCompras: Producto[] = [
  {
    desc: 'Telefono 1',
    precio: 150,
  },
  {
    desc: 'Telefono 2',
    precio: 200,
  },
];

const [total, isv] = calcularISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV: ', isv);
