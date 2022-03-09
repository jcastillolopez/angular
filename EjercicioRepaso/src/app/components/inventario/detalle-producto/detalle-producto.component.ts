import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  @Input() producto: any

  @Output() productoActualizado: EventEmitter<any>

  constructor() {
    this.producto = {};
    this.productoActualizado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onClick(incrementar: boolean) {
    if (incrementar) {
      this.producto.stock++;
    } else {
      this.producto.stock--;
    }
    this.productoActualizado.emit(this.producto);
  }
}


