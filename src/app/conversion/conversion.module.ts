import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionRoutingModule } from './conversion-routing.module';
import { ConversionComponent } from './conversion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConversionComponent
  ],
  imports: [
    CommonModule,
    ConversionRoutingModule,
    FormsModule
  ]
})
export class ConversionModule { }
