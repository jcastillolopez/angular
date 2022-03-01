import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {
  @Input() num1: number;
  @Input() num2: number;
  //declaramos el Output
  @Output() SumaRealizada: EventEmitter<number>
  resultado: number;


  constructor() {

    this.num1 = 5;
    this.num2 = 8;
    this.resultado = 0;
    //inicializamos el Output
    this.SumaRealizada = new EventEmitter();

  }

  ngOnInit(): void {
  }
  pulsaBoton() {
    this.resultado = this.num1 + this.num2;
    // emitir el valor de Output
    this.SumaRealizada.emit(this.resultado);
  }
  onSumaRealizada($event: number) {
    console.log(`el resultado de la suma es: ${$event}`);
  }

}
