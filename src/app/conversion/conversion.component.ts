import { Component, OnInit } from '@angular/core';
import { CalculoService } from './calculo.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  public litros = 100;
  public pintas = 0;


  //inyecto la clase calculo service
  constructor(private calculoservice: CalculoService) {}


   //convertir metodo 
   convertir () {
     this.pintas = this.calculoservice.fromLitrosAPintas(this.litros);

   }


  ngOnInit(): void {
    this.convertir();
  }

}
