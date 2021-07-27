import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { InfoComponent } from './about/info/info.component';
import { OtroComponent } from './about/otro/otro.component';


@NgModule({
  declarations: [
    AboutComponent,
    InfoComponent,
    OtroComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
