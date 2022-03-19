import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SeriesService } from 'src/app/services/series.service';


@Component({
  selector: 'new',
  templateUrl: './form-series.component.html',
  styleUrls: ['./form-series.component.css']
})
export class FormSeriesComponent implements OnInit {

  formulario: FormGroup;

  constructor(private seriesService: SeriesService) {

    this.formulario = new FormGroup({
      title: new FormControl(),
      creator: new FormControl(),
      channel: new FormControl(),
      dates: new FormControl(),
      id: new FormControl(),
      image: new FormControl(),
      rating: new FormControl(),
    })

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.seriesService.create(this.formulario.value);

  }
}
