import { Component, OnInit } from '@angular/core';

export interface Contacto {
  nombre: string;
  genero: string;
  isVip: boolean;
  estadoLaboral: number | string;
  empresa: string
}

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {

  encabezado = "";
  descripcion = "";
  numeroContactos;
  //variable que nos permite saber si el formulario esta oculto o no
  //si el valor se cambia en la vista html se cambia en el controlador, aquí 
  formHidden = false;

  //array para usar con funcion guardarContacto()
  //es de tipo datosFormularioContacto
  //Se crea una interface Contacto que por eso pongo Contacto[] porque es un array 

  listaContactos: Contacto[]= [];
 

  //estado de la persona si esta trabajando o que
  estadosLaborales = [
    {id:0, descripcion: "trabajando"},
    {id:1, descripcion: "parado"},
    {id:2, descripcion: "estudiando"},
    {id:3, descripcion: "desconocido"},
  ]

  //campo donde guardo los campos del formulario
  datosFormularioContacto: Contacto = {
    nombre: '',
    genero: '',
    isVip: false,
    estadoLaboral: 0,
    empresa: ''
  };


  //funcion guardar contacto 
  //no guarda una copia si no un puntero y por ello sobreescribe los datos
  /*guardarContacto() {
    this.listaContactos.push({...this.datosFormularioContacto});
  } */

  guardarContacto() {
    this.listaContactos.push({...this.datosFormularioContacto});
    console.log(this.listaContactos);
  }

  constructor() {
    this.encabezado = "Lista de contactos";
    this.descripcion = "Ejemplo de utilizacion de formularios";
    this.numeroContactos = 0;

   }

  ngOnInit(): void {
  }

}
