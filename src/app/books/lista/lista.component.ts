import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  libros: any;

  constructor() { }

  ngOnInit(): void {
    //cojo toda la lista de libros sin hacer busquedas ni filtros
    this.libros = environment.books;
    console.log(this.libros);
  }

}
