import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAll() {
    return firstValueFrom(this.httpClient.get<any[]>('https://peticiones.online/api/series'))
  }
  create(pSerie: any) {
    //incluir cabeceras dentro de la peticion siempre la misma estructura
    const httpOptions = {
      headers: new HttpHeaders({
        // aqui las variables de la api
        authorizacion: 'lo que sea'
      })
    }
    return firstValueFrom(
      this.httpClient.post('https://peticiones.online/api/series', pSerie, httpOptions)//incluirlo dentro de la peticion
    );
  }
}
