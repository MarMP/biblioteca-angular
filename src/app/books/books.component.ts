import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  //ojo esto es por la inyeccion automática de dependencias
  //es el propio frameworl el que gestiona el ciclo de vida de estos objetos por nosotros
  //desde el constructor recibimos el paramtero y en este caso usaremos el activaRoute

  //variable para buscar el libro en el enviroment que estamos usando a modo de simulacion de base de datos
  libro: any;

  constructor(route: ActivatedRoute) {
    //para recuperarñps parametros se usa una promesa, para ello el objeto Activated
    //Route tiene un atributo param que tiene un subscribe que nos permite
    //subscribirmos al paso de parametos
    //una vez lo tenemos con el params.NOMBRE_PARAMETRO podemos ver
    //es importante que este NOMBRE_PARAMETRO conicida con el parametro
    //que le hemos puesto en el routing correspondiente
    //el BUGS LO HEMOS PUESTO EN BOOKS-ROUTING.MODULE.TS TIENE QUE COINCIDIR 
    route.params.subscribe(params => {
      const slug = params.slug;
      console.log(slug);
      //buscar el libro que coincide con el slug
      //enviroment.books es un array por eso se usa el find para buscar (archivo enviroment.ts) 
      this.libro = environment.books.find(book => book.slug === slug);
      console.log(this.libro);

      //Si la busqueda no encuentra nada saca una lista vacía de libros
      if (typeof(this.libro)=="undefined"){
        this.libro = new Array();
      }
    })
  }

  ngOnInit(): void {
  }

}
