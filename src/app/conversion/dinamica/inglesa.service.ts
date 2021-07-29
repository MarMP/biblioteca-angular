import { Injectable } from '@angular/core';
import { CalculoService } from '../calculo.service';
import { ConversionService } from './culture-conversion';

@Injectable({
  providedIn: 'root'
})
export class InglesaService extends ConversionService{

  culturaOrigen = "Europea";
  culturaDestino = "Inglesa";

  constructor(public calculoservice: CalculoService) {
    super(calculoservice);
   }

  //metodo para conversion
  //no le pongo los parentesis a fromLitrosPintas porque apunto al puntero
  //el metodo convertirMedidas lo igualo al puntero fromLitros...
  public convertirMedidas = this.calculoservice.fromLitrosAPintas;
}
