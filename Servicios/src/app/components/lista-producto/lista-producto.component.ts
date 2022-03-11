import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  arrProds: Producto[];
  paises: string[];

  constructor(private productosService: ProductosService) {
    this.arrProds = [];
    this.paises = [];

  }

  ngOnInit(): void {
    this.arrProds = this.productosService.getAll();
    this.paises = this.productosService.getPaises();

  }

  onClick() {
    this.arrProds = this.productosService.getDisponibles();
  }
  onInput($event: any) {
    this.arrProds = this.productosService.getByPrecio($event.target.value);
  }
  onChange($event: any) {
    this.arrProds = this.productosService.getByPais($event.target.value);
  }
}