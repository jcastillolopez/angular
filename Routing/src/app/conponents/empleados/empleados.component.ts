import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleadoId: number;
  constructor(private activatedRoute: ActivatedRoute) {
    this.empleadoId = 0;
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.empleadoId = (params['empleadoId']);
    });
  }

}
