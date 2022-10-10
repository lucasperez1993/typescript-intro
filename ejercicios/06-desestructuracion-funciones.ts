export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Xiaomi Mi A3',
  precio: 250,
};

const tablet: Producto = {
  desc: 'Samsung Tab 7',
  precio: 350,
};

export function calcularISV(productos: Producto[]): [number, number] {
  let total = 0;
  productos.forEach(({ precio }) => {
    total += precio;
  });
  return [total, total * 0.15];
}

const articulos = [telefono, tablet];

const [total, isv] = calcularISV(articulos);

//console.log('Total: ', total);
//console.log('ISV: ', isv);
