import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { ListaComponent } from './lista/lista.component';

//si tenemos una variable que funciona como ** y se traga todo debe de ir al final
//lista debe ir antes que slug
const routes: Routes = [{ 
    path: 'lista',
    component: ListaComponent
  },
  {
    path: ':slug',
    component: BooksComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
