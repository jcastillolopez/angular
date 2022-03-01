import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  numero: number;

  constructor() {
    this.numero = 0;
    // setInterval(() => {
    //   this.numero = this.numero++;

    //}, 1000);

    //cuando pase 1 s debemos incrementar en 1 el numero y que eso se refleje en el html --> setinterval
  }

  ngOnInit(): void {
  }
  pulsaBoton() {
    this.numero++;
  }

}
