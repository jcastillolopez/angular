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
  listaCanales: string[];

  constructor(private seriesService: SeriesService) {
    this.series = [];
    this.listaCanales = [];
  }
  ngOnInit(): void {
    this.series = this.seriesService.getAll();
    this.listaCanales = this.seriesService.getCanales();
  }
  onChange($event: any) {
    this.series = this.seriesService.getBycanal($event.target.value);
  }
}