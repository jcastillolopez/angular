import { Component, OnInit } from '@angular/core';
//import { clear } from 'console';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  numeroInicio: number;

  constructor() {
    this.numeroInicio = 7;

  }

  ngOnInit(): void {
  }
  pulsaBoton() {

    const interval = setInterval(() => {
      this.numeroInicio--;
      if (this.numeroInicio === 0) {
        clearInterval(interval);
      }

    }, 1000);

  }

}
