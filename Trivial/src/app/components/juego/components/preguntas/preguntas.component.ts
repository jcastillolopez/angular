
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  @Input() enunciado: string;

  constructor() {
    this.enunciado = '';

  }
  ngOnInit(): void {
  }

}
