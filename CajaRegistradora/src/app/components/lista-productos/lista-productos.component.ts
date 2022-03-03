import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  @Input() titulo: string;
  @Input() productos: any[];

  @Output() productoSelecionado: EventEmitter<any>;

  constructor() {
    this.titulo = '';
    this.productos = [];

    this.productoSelecionado = new EventEmitter();
    console.log()
  }

  ngOnInit(): void {
  }
  selectProducto(pProducto: any) {
    this.productoSelecionado.emit(pProducto);



  }
}
