import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion.component';
import { ConversorDinamicoComponent } from './dinamica/conversor-dinamico/conversor-dinamico.component';

const routes: Routes = [
  { path: '', component: ConversionComponent },
  { path: 'dinamico', component: ConversorDinamicoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversionRoutingModule { }
