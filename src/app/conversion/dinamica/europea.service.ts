import { Injectable } from '@angular/core';
import { CalculoService } from '../calculo.service';
import { ConversionService } from './culture-conversion';

@Injectable({
  providedIn: 'root'
})
export class EuropeaService extends ConversionService {

  //dos variables para indicar hacia que cultura vamos
  culturaOrigen = "Inglesa";
  culturaDestino = "Europea";


  //inyectamos el servicio
  constructor(public calculoservice: CalculoService) {
    //extender del padre (de la clase abstracta)
    super(calculoservice);
  }

    //metodo para convertir
    public convertirMedidas = this.calculoservice.fromPintasALitros;

}