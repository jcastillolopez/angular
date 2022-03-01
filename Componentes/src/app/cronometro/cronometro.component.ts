import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  @Input() inicio: number;
  // 1- declaramos el Output
  @Output() cuentaFinalizada: EventEmitter<string>;


  // como le puedo pasar una propiedad fin para que termine en ese numero no en 0


  constructor() {
    this.inicio = 0;
    //inicializo el Output
    this.cuentaFinalizada = new EventEmitter();
  }
  ngOnInit(): void {
  }
  comenzarCuenta() {
    const interval = setInterval(() => {
      this.inicio--;
      if (this.inicio === 0) {
        clearInterval(interval);
        //emito la informacion al padre
        this.cuentaFinalizada.emit('El cronometro ha finalizado');
      }
    }, 1000);
  }
}
