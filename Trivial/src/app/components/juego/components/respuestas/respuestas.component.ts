import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {
  @Input() respuestasActual: string[];
  @Input() respuestaCorrectaActual: number

  @Output() respuestaSeleccionada: EventEmitter<boolean>

  constructor() {
    this.respuestasActual = [];
    this.respuestaCorrectaActual = 0;
    this.respuestaSeleccionada = new EventEmitter();

  }

  ngOnInit(): void {
  }
  onClick(indice: number) {
    if (this.respuestaCorrectaActual === indice + 1) {
      this.respuestaSeleccionada.emit(true);
    } else {
      this.respuestaSeleccionada.emit(false);
    }

  }
}
