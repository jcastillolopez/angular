import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { personajeInterface } from 'src/app/interfaces/personaje.interface';
import { serieInterface } from 'src/app/interfaces/serie.interface';
import { PersonajesService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-detalle-series',
  templateUrl: './detalle-series.component.html',
  styleUrls: ['./detalle-series.component.css']
})
export class DetalleSeriesComponent implements OnInit {
  detalle: serieInterface;
  arrPersonajes: personajeInterface[];

  constructor(
    private activateRoute: ActivatedRoute,
    private seriesService: SeriesService,
    private personajesService: PersonajesService

  ) {
    this.detalle = {};
    this.arrPersonajes = [];

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.detalle = this.seriesService.getById(params['serieId']);
      this.arrPersonajes = this.personajesService.getBySerie(params['serieId']);
    });
  }

}
