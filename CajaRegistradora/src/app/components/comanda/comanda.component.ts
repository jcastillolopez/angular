import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  @Input() productosComanda: any;


  constructor() {
    this.productosComanda = [];
  }

  ngOnInit(): void {
    this.productosComanda
  }
  funcionTotal() {
    let total = 0;
    for (const productoComanda of this.productosComanda) {
      total += productoComanda.precio;
    }
    return total;
  }
  borrar(pindice: number) {
    this.productosComanda.splice(pindice, 1);
  }
}
