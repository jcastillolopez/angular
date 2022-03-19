
/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />


import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-mapa-js',
  templateUrl: './mapa-js.component.html',
  styleUrls: ['./mapa-js.component.css']
})
export class MapaJsComponent implements OnInit {

  mapa: google.maps.Map;

  @ViewChild('divMapa') divMapa!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // recuperar la posicion del dispositivo
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      // colocar nuestra posicion
      const newCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.mapa.setCenter(newCenter);
      // crear marcadores propios
      const marker = new google.maps.Marker({
        position: newCenter,
        map: this.mapa,
        animation: google.maps.Animation.DROP
      })


    });

  }
  ngAfterViewInit() {
    this.loadMap();
    this.loadAutocomplete();
  }
  // para interactuar con el html
  loadMap() {
    const options = {
      center: new google.maps.LatLng(40, -3),
      zoom: 21,
      mapTypedId: google.maps.MapTypeId.HYBRID
    }
    this.mapa = new google.maps.Map(this.divMapa.nativeElement, options)
    // capturar el click sobre el mapa
    google.maps.event.addListener(this.mapa, 'click', (event) => {
      // console.log(event.latLng);
      const marker = new google.maps.Marker({
        position: event.latLng,
        map: this.mapa,
        animation: google.maps.Animation.DROP,
        icon: {
          url: 'https://i.pinimg.com/originals/12/15/30/12153058cf7f17ac38b1342db1d30be5.gif',
          scaledSize: new google.maps.Size(50, 50)
        }
      });
      //modificaciones sobre el marker ejm arrastrar
      marker.setDraggable(true);
      //agragr eventos al markerej borrarle
      google.maps.event.addListener(marker, 'click', (event) => {
        marker.setMap(null);
      });
      //cambiar animacion ejm al selecionarle con el raton
      google.maps.event.addListener(marker, 'mouseover', (event) => {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      });
      // parar animacion
      google.maps.event.addListener(marker, 'mouseover', (event) => {
        marker.setAnimation(null);
      });
    });
  }
  loadAutocomplete() {
    const inputPlaces = document.getElementById('inputPlaces') as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(inputPlaces);
    google.maps.event.addListener(autocomplete, 'place_changed', (event) => {
      // recuperar el sitio seleccionado
      const place = autocomplete.getPlace();
      console.log(place);
      this.mapa.setCenter(place.geometry.location);
      this.calcularRuta('valdecaleras 5 Madrid', place.geometry.location)
    });
  }
  calcularRuta(pOrigin: any, pDestination: any) {
    // recupera los datos que unen los puntos en el mapa
    const direccionsService = new google.maps.DirectionsService();
    // pinta la ruta en elmapa
    const direccionRender = new google.maps.DirectionsRenderer();
    // le digo en que mapa
    direccionRender.setMap(this.mapa);
    direccionsService.route({
      origin: pOrigin,
      destination: pDestination,
      travelMode: google.maps.TravelMode.DRIVING
    }, (result) => {
      console.log(result);
      direccionRender.setDirections(result);
    })

  }

}