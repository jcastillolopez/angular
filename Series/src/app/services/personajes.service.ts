import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db(1)';
import { personajeInterface } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() {
  }
  getBySerie(pSerieId: number): personajeInterface[] {
    return PERSONAJES.filter(personaje => personaje.serie === pSerieId);
  }
}
