import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { InfoComponent } from './about/info/info.component';
import { OtroComponent } from './about/otro/otro.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children:[
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'otro',
        component: OtroComponent
      }
    ]
  },
  {
    path: 'otro2',
    component: OtroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
