import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/interfaces/pregunta';
import { datosPreguntas } from './datos';

@Component({
  selector: 'juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  arrPreguntas: Pregunta[];
  preguntaActual: number;
  contadorPuntos: number;

  constructor(private router: Router) {
    this.arrPreguntas = datosPreguntas;
    this.preguntaActual = 0;
    this.contadorPuntos = 0;
  }

  ngOnInit(): void {
  }
  onClick(pPath: string) {
    this.router.navigate([pPath]);
  }
  onGestionRespuesta($event: boolean) {
    if ($event === true) {
      this.contadorPuntos += this.arrPreguntas[this.preguntaActual].puntuacion;
    }
    if (this.preguntaActual === this.arrPreguntas.length - 1) {
      alert(this.contadorPuntos)
      this.router.navigate(['/home'])
    } localStorage.setItem('puntuacion_trivial', String(this.contadorPuntos));

    this.preguntaActual++

    console.log(this.contadorPuntos)
    console.log(this.preguntaActual);
  }
}
