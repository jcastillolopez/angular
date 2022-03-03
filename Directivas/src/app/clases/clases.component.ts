import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  colorSeleccionado: string;

  constructor() {
    this.colorSeleccionado = 'r';
  }

  ngOnInit(): void {
    //cada segundo cambie de color r-a-v
    setInterval(() => {
      console.log('hjhjjkkkk')
      if (this.colorSeleccionado === 'r') {
        this.colorSeleccionado = 'a';
      } else if (this.colorSeleccionado === 'a') {
        this.colorSeleccionado = 'v';
      } else if (this.colorSeleccionado === 'v') {
        this.colorSeleccionado = 'r';
      }
    }, 1000)
  }

}
