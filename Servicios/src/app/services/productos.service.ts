import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[];

  constructor() {
    this.productos = [
      { nombre: 'manzana', precio: 3, stock: 20, disponible: true, imagen: 'https://elegifruta.com.ar/onepage/wp-content/uploads/2017/07/manzana_roja.jpg', pais: 'francia' },
      { nombre: 'plátano', precio: 2.98, stock: 10, disponible: true, imagen: 'https://www.quimicaysociedad.org/wp-content/uploads/2015/06/platano.jpg', pais: 'espana' },
      { nombre: 'pera', precio: 3, stock: 20, disponible: true, imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/10/conservar-pera-por-mas-tiempo-gresei.jpg', pais: 'venezuela' },

      { nombre: 'fresa', precio: 5.32, stock: 500, disponible: false, imagen: 'https://img.interempresas.net/fotos/1341264.jpeg', pais: 'francia' },
      { nombre: 'pera', precio: 3, stock: 20, disponible: true, imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/10/conservar-pera-por-mas-tiempo-gresei.jpg', pais: 'espana' },

      { nombre: 'lechuga', precio: 4.45, stock: 3, disponible: true, imagen: 'https://images.ecestaticos.com/8llVkYpZo9gN11fmBvjFeOQd10U=/0x109:2121x1301/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F5cc%2Fef6%2F068%2F5ccef6068a457cdae460a5469d4af804.jpg', pais: 'francia' },
      { nombre: 'melocotón', precio: 2.29, stock: 50, disponible: false, imagen: 'https://www.hogarmania.com/archivos/201305/melocotones-xl-1280x720x80xX.jpg', pais: 'italia' },
      { nombre: 'aguacate', precio: 7, stock: 12, disponible: true, imagen: 'https://cienciaybiologia.com/wp-content/uploads/2021/04/aguacate.png', pais: 'italia' },
    ];
  }

  // Método que me devuelva todos los productos
  getAll(): Producto[] {
    return this.productos;
  }
  // metodo que devuelve los productos disponibles(FILTRO)
  getDisponibles(): Producto[] {
    const disponibles = [];
    for (const producto of this.productos) {
      if (producto.disponible) {
        disponibles.push(producto);
      }

    }
    return disponibles;
  }
  // crear un metodo que me devuelva los mas caros
  getByPrecio(pPrecio: number): Producto[] {
    /*   const result = [];
       for (const producto of this.productos) {
         if (producto.precio >= pPrecio) {
           result.push(producto);
          }      
       }
       return result;
       }  */
    return this.productos.filter(producto => producto.precio >= pPrecio) // = que lo comentado con funcion filter
  }
  getByPais(pPais: string): Producto[] {
    return this.productos.filter(producto => producto.pais === pPais)
  }
  getPaises(): string[] {
    const result: string[] = [];
    for (const producto of this.productos) {
      if (!result.includes(producto.pais)) {
        result.push(producto.pais);
      }
    }
    return result;

  }
  getPaisesV2(): string[] {
    // Si quiero sacar un atributo de cada uno de los objetos de un array -> map    
    return [...new Set(this.productos.map(producto => producto.pais))];
  }

}
