import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  autorId: number;
  libroId: number;
  constructor(private activateRoute: ActivatedRoute) {
    this.autorId = 0;
    this.libroId = 0;
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.autorId = parseInt(params['autorId']);
      this.libroId = parseInt(params['libroId']);
    });
  }

}
