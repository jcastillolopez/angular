import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'listado-tareas',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() lista: Tarea[];

  constructor() {

    this.lista = [];
  }

  ngOnInit(): void {
  }
  onClick(ptarea: Tarea) {
    ptarea.completa = !ptarea.completa;
  }
  onClickBorrar(indice: number) {
    this.lista.splice(indice, 1);
  }
}
