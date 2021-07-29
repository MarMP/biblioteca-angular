import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../culture-conversion';

@Component({
  selector: 'app-conversor-dinamico',
  templateUrl: './conversor-dinamico.component.html',
  styleUrls: ['./conversor-dinamico.component.css']
})
export class ConversorDinamicoComponent implements OnInit {

  public origen:string;
  public destino:string;
  public unidadesOrigen = 0;
  public unidadesDestino:number;


  //importamos la clase abstracta de culture-service que creamos 
  //que a su vez implementa la interfaz de conversion
  constructor(private conversionservice:ConversionService) { 
    //inicializo las variables vacías
    this.origen ='';
    this.destino = '';
    this.unidadesDestino = 0;
  }

  ngOnInit(): void {
    //reinicio las variables para usar los valores que tenga el cultureservice
    //el init se ejecuta despues del constructor
    //estas inicializaciones son las que se usaran
    this.origen = this.conversionservice.culturaOrigen;
    this.destino = this.conversionservice.culturaDestino;
    //invocamos al convertir para que haga la conversion nada mas entrar
    this.convertir();

  }

  public convertir() {
    //para convertir invocamos al metodo convertirMedidas del servicio abstracto (clase abstracta)
    this.unidadesDestino = this.conversionservice.convertirMedidas(this.unidadesOrigen);

  }

}
