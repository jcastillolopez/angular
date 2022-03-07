
import { Component } from '@angular/core';
import { Producto } from './interface/Producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrProductosPendientes: Producto[];
  arrProductoSeleccionados: Producto[];
  arrProductosComprados: Producto[];

  constructor() {
    this.arrProductoSeleccionados = []
    this.arrProductosPendientes = [];
    this.arrProductosComprados = [];
  }

  onProductoCreado($event: Producto) {
    this.arrProductosPendientes.push($event);
  }

  onProductoSeleccionado($event: number) {
    const productosBorrados = this.arrProductosPendientes.splice($event, 1);
    this.arrProductosComprados.push(productosBorrados[0]);
  }

  onProductoSeleccionadoComprado($event: number) {
    const arrProductosBorrados = this.arrProductosComprados.splice($event, 1);
    this.arrProductosPendientes.push(arrProductosBorrados[0]);
  }
}


