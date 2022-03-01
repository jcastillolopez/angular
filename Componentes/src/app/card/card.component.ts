import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() nombre: string;
  @Input() direccion: string;
  @Input() email: string;
  @Input() departamento: string;



  constructor() {
    this.nombre = ' Mario Giron';
    this.direccion = ' C/ Gran Via 23';
    this.email = ' mario@giron.com';
    this.departamento = ' Informatica';

  }

  ngOnInit(): void {
  }
  pulsaBoton() {
    alert(this.nombre);
  }

}
