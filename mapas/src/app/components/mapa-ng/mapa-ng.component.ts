import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-mapa-ng',
  templateUrl: './mapa-ng.component.html',
  styleUrls: ['./mapa-ng.component.css']
})
export class MapaNgComponent implements OnInit {

  lat: number;
  lng: number;
  arrPaises: any[];

  constructor(
    private paisesService: PaisesService
  ) {
    this.lat = 40;
    this.lng = -3;
  }

  async ngOnInit() {
    this.arrPaises = await this.paisesService.getEurope();

    const response = await this.paisesService.getEurope();
  }

  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });

  }

}
