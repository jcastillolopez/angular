import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-templete',
  templateUrl: './templete.component.html',
  styleUrls: ['./templete.component.css']
})
export class TempleteComponent implements OnInit {

  @ViewChild('parrafo') parrafo: any;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(formsValue: { nombre: string, apellidos: string, edad: number, direccion: string }) {
    console.log(formsValue)
  }
  onClick() {
    console.log(this.parrafo);
    this.parrafo.nativeElement.style.backgroundColor = 'red';
  }
}
