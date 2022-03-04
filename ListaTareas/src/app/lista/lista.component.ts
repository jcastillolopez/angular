import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() lista: Tarea[];

  constructor() {

    this.lista = Tarea[];
  }

  ngOnInit(): void {
  }

}
