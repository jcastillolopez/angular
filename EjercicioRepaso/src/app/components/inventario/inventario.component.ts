import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  productos: any[];
  valorStock: number;

  constructor() {
    this.valorStock = 0
    this.productos = [
      { nombre: 'manzana', precio: 3, stock: 1, disponible: true, imagen: 'https://elegifruta.com.ar/onepage/wp-content/uploads/2017/07/manzana_roja.jpg' },
      { nombre: 'plátano', precio: 2.98, stock: 1, disponible: true, imagen: 'https://www.quimicaysociedad.org/wp-content/uploads/2015/06/platano.jpg' },
      { nombre: 'pera', precio: 3, stock: 1, disponible: true, imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/10/conservar-pera-por-mas-tiempo-gresei.jpg' },
      { nombre: 'fresa', precio: 5.32, stock: 1, disponible: true, imagen: 'https://img.interempresas.net/fotos/1341264.jpeg' },
      { nombre: 'lechuga', precio: 4.45, stock: 3, disponible: true, imagen: 'https://images.ecestaticos.com/8llVkYpZo9gN11fmBvjFeOQd10U=/0x109:2121x1301/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F5cc%2Fef6%2F068%2F5ccef6068a457cdae460a5469d4af804.jpg' },
      { nombre: 'melocotón', precio: 2.29, stock: 1, disponible: false, imagen: 'https://www.hogarmania.com/archivos/201305/melocotones-xl-1280x720x80xX.jpg' },
      { nombre: 'aguacate', precio: 13, stock: 1, disponible: true, imagen: 'https://cienciaybiologia.com/wp-content/uploads/2021/04/aguacate.png' },
    ];

  }

  ngOnInit(): void {
    this.totalInventario()
  }
  onNuevoStockProducto($event: any) {

    for (const producto of this.productos) {
      if (producto.nombre === $event.nombre) {
        producto.stock = $event.stock;
      }
    }
    this.totalInventario()
  }
  totalInventario() {
    let valorTotal = 0;
    for (const producto of this.productos) {
      let valor = producto.stock * producto.precio;
      valorTotal += valor;
    }
    this.valorStock = valorTotal
  }


}
