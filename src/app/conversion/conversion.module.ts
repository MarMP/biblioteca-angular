import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionRoutingModule } from './conversion-routing.module';
import { ConversionComponent } from './conversion.component';
import { FormsModule } from '@angular/forms';
import { ConversorDinamicoComponent } from './dinamica/conversor-dinamico/conversor-dinamico.component';
import { ConversionService } from './dinamica/culture-conversion';
import { InglesaService } from './dinamica/inglesa.service';
import { environment } from 'src/environments/environment';
import { EuropeaService } from './dinamica/europea.service';
import { CalculoService } from './calculo.service';

//patron factory devuelve una instancia de un objeto, este patron se usa cuando debemos seleccionar
//entre varias posibles implementaciones de un objeto, pasa asi poder seleccionar en tiempo de ejecucion 
//en nuestro caso la variable del enviroment  pero podria ser 

const conversionFactory = (calculoservice: CalculoService) => {
  if(environment.destino==="Europa") {
    return new EuropeaService(calculoservice);
  } else {
    return new InglesaService(calculoservice);
  }
}


@NgModule({
  declarations: [
    ConversionComponent,
    ConversorDinamicoComponent
  ],
  imports: [
    CommonModule,
    ConversionRoutingModule,
    FormsModule
  ],
  providers: [
    {
      //usamos el factory 
      //indicamos a que servicio le afecta la configuracion en este caso al conversion service
      provide: ConversionService,
      //ahora a diferencia de antes que poniamos una clase, ponemos la factoria que es la que devolvera
      //la implementacion correcta en tiempo de ejecucion en nuestro caso la conversionFactory que tenemos definida
      //mas arriba 
      useFactory: conversionFactory,
      //array de dependencias que tenia la factoria, en nuestro caso dependemos del CalculoService y 
      //por eso debemos ponerla
      deps:[CalculoService]
    }
  ]


  /* primer ejemplo de providers que se ha hecho a mano para cambiar una implementacion por otra
   en tiempo de ejecucion
  providers: [
    {
      provide:ConversionService,
      useClass: InglesaService
    }
  ] */
})
export class ConversionModule { }
