import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interface/Producto';
@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  nuevoProducto: Producto;
  @Output() productoCreado: EventEmitter<Producto>;


  constructor() {
    this.nuevoProducto = {
      nombre: ``,
      cantidad: 0,
      departamento: ''
    }

    this.productoCreado = new EventEmitter();
  }

  ngOnInit(): void {

  }

  onClick() {
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = {
      nombre: ``,
      cantidad: 0,
      departamento: ''
    }
  }
}
