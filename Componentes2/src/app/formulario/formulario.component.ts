import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  campoTexto: string;
  paciente: any;

  @Output() crearPaciente: EventEmitter<any>;


  constructor() {
    this.campoTexto = '';
    this.paciente = {};
    this.crearPaciente = new EventEmitter();
  }

  ngOnInit(): void {
  }
  pulsaBoton() {
    this.campoTexto = 'lo que querais';
  }
  enviarFormulario() {
    this.crearPaciente.emit(this.paciente);
  }
}
