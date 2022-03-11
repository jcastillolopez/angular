import { Injectable } from '@angular/core';
import { serieInterface } from '../interfaces/serie.interface';
import { SERIES } from '../db/series.db';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private series: serieInterface[];


  constructor() {
    this.series = SERIES;
  }

  getAll(): serieInterface[] {
    return this.series;
  }
  getSeries(): string[] {
    return [...new Set(this.series.map(serie => serie.titulo))];
  }
  getByserie(pSerie: string): serieInterface[] {
    console.log(pSerie)
    return this.series.filter(serie => serie.titulo === pSerie);
  }
}

