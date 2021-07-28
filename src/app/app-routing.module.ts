import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: HomecomponentComponent
},
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path : 'not-found', component: NotFoundComponent},
  { path: 'contactos', loadChildren: () => import('./contactos/contactos.module').then(m => m.ContactosModule) },
  { path: 'car', loadChildren: () => import('./car/car.module').then(m => m.CarModule) },
  { path: 'conversion', loadChildren: () => import('./conversion/conversion.module').then(m => m.ConversionModule) },
  { path : '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
