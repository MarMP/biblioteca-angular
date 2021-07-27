import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactosComponent
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    FormsModule
  ]
})
export class ContactosModule { }
