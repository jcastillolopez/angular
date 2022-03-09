import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabBar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {
  idPulsado: number;

  constructor() {
    this.idPulsado = 0;
  }

  ngOnInit(): void {
  }
  onClick($event: any) {
    this.idPulsado = parseInt($event.target.id);

    console.log(this.idPulsado)
  }

}

