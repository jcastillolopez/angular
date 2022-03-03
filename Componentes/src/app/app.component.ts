import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Componentes';

  empleados: any[];
  empleadosSelecionados: any[];

  constructor() {
    this.empleados = [{ nombre: 'Ines garcia', direccion: 'C/ ballesta 25', email: 'ines@garcia.com', departamento: 'desarrollo' }, { nombre: 'Raul Romero', direccion: 'C/ amposta 15', email: 'Raul@Romero.com', departamento: 'desarrollo' },];
    this.empleadosSelecionados = [];
  }
  onCuentaFinalizada($event: number) {
    console.log(`El resultado de la suma es: ${$event}`);
  }
  onSeleccionarEmpleado($event: any) {
    this.empleadosSelecionados.push($event);
    console.log(this.empleadosSelecionados);

  }
}
