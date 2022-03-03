import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CajaRegistradora';

  arrComida: any[];
  arrBebida: any[];

  productosSeleccionado: any[];

  constructor() {

    this.arrComida = [
      {
        nombre: 'Paella', imagen: 'https://media.istockphoto.com/photos/spanish-paella-picture-id165120023?k=20&m=165120023&s=612x612&w=0&h=On5wSVPRscmsv-XJ6O9etLnBrWUrb6bclzcCFbMzScQ=',
        precio: 12
      },
      {
        nombre: 'Cachopo', imagen: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cachopo-astuariano-madrid-que-es-domicilio-esquire-charca-1571913786.jpg',
        precio: 9
      },
      {
        nombre: 'Tortilla_Patata', imagen: 'https://www.hogarmania.com/archivos/201209/tortilla-espanola-patatas-XxXx80.jpg',
        precio: 5
      },
      {
        nombre: 'Cocido_Madrileño', imagen: 'https://www.goya.com/media/3791/chick-pea-stew.jpg?quality=80',
        precio: 20
      }

    ];
    this.arrBebida = [
      {
        nombre: 'Fanta', imagen: 'https://m.media-amazon.com/images/I/31nQECs7BpL._SY445_.jpg', precio: 2
      },
      {
        nombre: 'Cocacola', imagen: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2020/03/11/5fa905d369543.jpeg', precio: 3
      },
      {
        nombre: 'Cerveza', imagen: 'https://www.encopadebalon.com/3548-large_default/cerveza-mahou-5-estrellas-pack-24-botellines.jpg', precio: 1
      },
      {
        nombre: 'Vino', imagen: 'https://www.ikea.com/es/es/images/products/storsint-copa-vino-tinto-vidrio-incoloro__0640894_pe700139_s5.jpg?f=s', precio: 1.5
      }

    ];
    this.productosSeleccionado = [];

  }
  productoEnviado($event: any) {
    this.productosSeleccionado.push($event);
    console.log(this.productosSeleccionado);
  }
  productoRecibido($event: any) {

  }
}

