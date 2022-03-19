import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private personajesService: PersonajesService
  ) { }

  ngOnInit(): void {
    this.activateRoute.parent?.params.subscribe(async params => {
      console.log(params['idPersonaje']);
      const personajeSeleccionado = await this.personajesService.
      
      
      }
      
    });
}

}
