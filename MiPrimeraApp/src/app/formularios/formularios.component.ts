import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  mensaje: string;
  bandera: string;

  constructor() {
    this.mensaje = '';
    this.bandera = '';
  }

  ngOnInit(): void {
  }
  cambiaNombre($event: any) {
    this.mensaje = $event.target.value;
  }
  cambiaPais($event: any) {
    this.bandera
    console.log($event.target.value);
    //dependiendo del pais seleccionado poner la bandera
    //mostrar la propiedad bandera en el htbanderaml 
    switch ($event.target.value) {
      case 'es':
        this.bandera = '๐งก';
        break;
      case 'it':
        this.bandera = '๐';
        break;
      case 'fr':
        this.bandera = '๐';
        break;
      case 'de':
        this.bandera = '๐ค';
    }
  }
}
