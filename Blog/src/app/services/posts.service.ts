import { Injectable } from '@angular/core';
import { postInterface } from '../interfaces/Post.interface';
import { ARRdatosPost } from '../db/postDatos.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  datosPostPrueba: postInterface[];

  constructor() {
    this.datosPostPrueba = ARRdatosPost
  }

  getAll(): postInterface[] {
    return this.datosPostPrueba;
  }

  getByPost(pTitle: string): postInterface  /* PostInterface | undefined*/ {
    console.log(pTitle)
    return this.datosPostPrueba.find(post => post.title === pTitle)!

    /*let resultado = this.datosPostPrueba.find(post => post.title === pId)
    
    if (resultado) {
      return resultado
    } else {
      return {
        title: "",
        body: "",
        author: "",
        category: "",
        createdAt: new Date()
      }
    }*/
  }

}
