import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  arrProductos: any[];

  constructor(
    private productsServices: ProductsService
  ) {
    this.arrProductos = [];
  }

  /*  ngOnInit(): void {
      this.productsServices.getAll()
        .then((response) => {
          this.arrProductos = response.data;
          console.log(this.arrProductos)
        });
    }*/
  async ngOnInit() {
    // jecucuin con async await
    const response = await this.productsServices.getAll()
    this.arrProductos = response.data;
  }
}
