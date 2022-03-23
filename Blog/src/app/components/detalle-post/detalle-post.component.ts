import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { postInterface } from 'src/app/interfaces/Post.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent implements OnInit {

  objetoPost: postInterface;

  constructor(
    private activatedRouter: ActivatedRoute,
    private postService: PostsService
  ) {
    this.objetoPost = {
      title: "",
      body: "",
      author: "",
      category: "",
      createdAt: new Date(),
    }
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.objetoPost! = this.postService.getByPost(params["tituloSeleccionado"]);
    })
  }

}
