import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {
  arrSeries: any[];
  constructor(private seriesServices: SeriesService
  ) {
    this.arrSeries = [];
  }

  async ngOnInit() {
    const response = await this.seriesServices.getAll();
    this.arrSeries = response;

    console.log(this.arrSeries)
  }
}
