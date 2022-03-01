import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Componentes';

  empleados: any[];

  constructor() {
    this.empleados = [{ nombre: 'Ines garcia', direccion: 'C/ ballesta 25', email: 'ines@garcia.com', departamento: 'desarrollo' }, { nombre: 'Raul Romero', direccion: 'C/ amposta 15', email: 'Raul@Romero.com', departamento: 'desarrollo' },];
  }
  onCuentaFinalizada($event: number) {
    console.log(`El resultado de la suma es: ${$event}`);
  }
}
