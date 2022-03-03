import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {
  estilosParrafo: any;

  constructor() {
    this.estilosParrafo = {
      backgroundColor: 'blue'
    };
  }

  ngOnInit(): void {
  }
  cambiaColor() {
    this.estilosParrafo.backgroundColor = 'red';
  }
  cambiaColorDesplegable($event: any) {
    this.estilosParrafo.backgroundColor = $event.target.value;
  }
  cambiarTexto($event: any) {
    this.estilosParrafo.color = $event.target.value;
  }
  cambiaTamanoLetra($event: any) {
    this.estilosParrafo.fontSize = $event.target.value + 'px';
  }

}
