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
  getCanales(): string[] {
    return [...new Set(this.series.map(serie => serie.canal))];
  }
  getBycanal(pCanal: string): serieInterface[] {
    return this.series.filter(serie => serie.canal === pCanal);
  }
  getById(pSerieId: number): serieInterface {
    return this.series.find(serie => serie.id === Number(pSerieId));
  }
}