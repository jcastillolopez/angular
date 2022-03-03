import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() nombre: string;
  @Input() direccion: string;
  @Input() email: string;
  @Input() departamento: string;
  @Output() seleccionarEmpleado: EventEmitter<any>;



  constructor() {
    this.nombre = ' Mario Giron';
    this.direccion = ' C/ Gran Via 23';
    this.email = ' mario@giron.com';
    this.departamento = ' Informatica';
    this.seleccionarEmpleado = new EventEmitter();

  }

  ngOnInit(): void {
  }
  pulsaBoton() {
    const empleado = {
      nombre: this.nombre,
      email: this.email,
      direccion: this.direccion,
      departamento: this.departamento,
    }
    this.seleccionarEmpleado.emit(empleado);
    //alert(this.nombre);
  }

}
