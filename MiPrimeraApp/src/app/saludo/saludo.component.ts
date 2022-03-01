import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SALUDOComponent implements OnInit {
  // declaracion de la prpiedad: nombre + tipo
  nombre: string;
  identificador: string;
  imagen: string;

  constructor() {
    //lo utilizamos para inicializar las propiedades del componente
    this.nombre = 'Rocio';
    this.identificador = 'parrafo';
    this.imagen = 'https://www.ecestaticos.com/imagestatic/clipping/797/767/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg?mtime=1622645511';
    setTimeout(() => {
      this.nombre = 'Julian';
      this.identificador = 'nuevoIdentificador';
      this.imagen = 'https://dam.ngenespanol.com/wp-content/uploads/2019/06/mirada-perros.png';
    }, 3000);

  }

  ngOnInit(): void {
  }
  mostrarMensaje(): string {
    return 'un string cualquiera';

  }

}
