import { Component, OnInit } from '@angular/core';
import { postInterface } from 'src/app/interfaces/Post.interface';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  arrdatosPost: postInterface[];

  constructor(
    private postservice: PostsService,
    private router: Router,
  ) {
    this.arrdatosPost = this.postservice.getAll();
  }

  ngOnInit(): void {


  }

  onClick(titleSeleccionado: String) {
    // console.log(titleseleccionado)
    this.router.navigateByUrl(`/detalle-post/${titleSeleccionado}`)
  }
}
