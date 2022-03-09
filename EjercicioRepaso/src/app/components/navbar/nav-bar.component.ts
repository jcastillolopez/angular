import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() colorFondo: string;
  @Input() colorTexto: string;

  @Output() seccionPulsada: EventEmitter<string>;

  constructor() {
    this.colorFondo = '';
    this.colorTexto = '';

    this.seccionPulsada = new EventEmitter;
  }

  ngOnInit(): void {
  }
  onClick(pSeccion: string) {
    this.seccionPulsada.emit(pSeccion);
  }


}
