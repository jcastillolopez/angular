import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  postsService: any;

  constructor(
    private router: Router,
    private postService: PostsService
  ) {
    this.formulario = new FormGroup({

      title: new FormControl('', [
        Validators.required,
      ]),

      body: new FormControl('', [
        Validators.required,
      ]),

      author: new FormControl('', [
        Validators.required,
      ]),

      category: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const fechaCreacion = new Date();
    this.formulario.value.createdAt = fechaCreacion;
    this.postService.create(this.formulario.value)
    this.router.navigate(['./lista-post'])

  }

  checkError(fieldName: string, errorType: string): boolean {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched

  }
}
