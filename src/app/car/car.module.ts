import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { VelocimetroComponent } from './car/velocimetro/velocimetro.component';
import { PedalesComponent } from './car/pedales/pedales.component';


@NgModule({
  declarations: [
    CarComponent,
    VelocimetroComponent,
    PedalesComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule
  ]
})
export class CarModule { }
