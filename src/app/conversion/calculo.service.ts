import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  private litrosapintas = 0.6;
  private pintasalitros = 1.6;


  constructor() { }


  //creo una funcion flecha con un metodo

  fromLitrosAPintas = (litros:number) : number => litros * this.litrosapintas;
  fromPintasALitros = (pintas:number) : number => pintas * this.pintasalitros;
}
