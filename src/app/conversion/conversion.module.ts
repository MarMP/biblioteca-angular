import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionRoutingModule } from './conversion-routing.module';
import { ConversionComponent } from './conversion.component';
import { FormsModule } from '@angular/forms';
import { ConversorDinamicoComponent } from './dinamica/conversor-dinamico/conversor-dinamico.component';
import { ConversionService } from './dinamica/culture-conversion';
import { InglesaService } from './dinamica/inglesa.service';


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
      provide:ConversionService,
      useClass: InglesaService
    }
  ]
})
export class ConversionModule { }
