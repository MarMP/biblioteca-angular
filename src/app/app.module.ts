import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunModule } from './comun/comun.module';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
