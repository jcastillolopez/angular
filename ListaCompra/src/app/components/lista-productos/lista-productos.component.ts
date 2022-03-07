import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interface/interface';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  @Input() titulo: string;
  @Input() productos: Producto[];

  @Output() productoSeleccionado: EventEmitter<number>;

  constructor() {
    this.titulo = '';
    this.productos = [];

    this.productoSeleccionado = new EventEmitter();

  }

  ngOnInit(): void {
  }
  onClick(indice: number) {
    this.productoSeleccionado.emit(indice);
  }

}
