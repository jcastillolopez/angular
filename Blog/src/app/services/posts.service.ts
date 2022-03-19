import { Injectable } from '@angular/core';
import { postInterface } from '../interfaces/Post.interface';
import { ARRdatosPost } from '../db/postDatos.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  datosPostPrueba: postInterface[];


  ngOnIninit() {

  }
  constructor() {

  }

  getAll(): postInterface[] {

    return this.datosPostPrueba = JSON.parse(localStorage.getItem('blogs'));

  }

  getByPost(pTitle: string): postInterface  /* PostInterface | undefined*/ {

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
  create(pPost: postInterface) {
    this.datosPostPrueba.push(pPost);
    console.log(this.datosPostPrueba);
    localStorage.setItem('blogs', JSON.stringify(this.datosPostPrueba));

  }
}
