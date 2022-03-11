import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { serieInterface } from 'src/app/interfaces/serie.interface';

@Component({
  selector: 'lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {
  series: serieInterface[];
  listaSeries: string[];

  constructor(private seriesService: SeriesService) {
    this.series = [];
    this.listaSeries = [];
  }
  ngOnInit(): void {
    this.series = this.seriesService.getAll();
    this.listaSeries = this.seriesService.getSeries();
  }
  onChange($event: any) {
    this.series = this.seriesService.getByserie($event.target.value);
  }
}