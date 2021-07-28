import { Component, OnInit } from '@angular/core';

export interface Car {
  velocidad:number,
  modelo:string,
  velocidadMaxima: number,
  velocidadMarchaAtras: number,

}

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  //creo una clase con interfaz
  coche:Car;

  //velocidad = 100;

  //unidades viene de pedales.component.html el valor entre paréntesis que se le mete 
  onAcelerar(unidades:number) {
    
    if (this.coche.velocidadMaxima >= (this.coche.velocidad+unidades)){
      this.coche.velocidad = this.coche.velocidad + unidades;
    }
    
  }

  onFrenar(unidades:number){
    //compruebo que la velocidad no es negativa 
    //en caso de que sea negativa evalua la segunda 
    //frenando y yendo hacia atrás eso es lo que cubre este if
    //la segunda condicion con || si el coche no esta parado y quieres frenar
    if((this.coche.velocidad <= 0) && (this.coche.velocidadMarchaAtras>=Math.abs(this.coche.velocidad - unidades)) || this.coche.velocidad > 0){
      this.coche.velocidad = this.coche.velocidad - unidades;
    }
    
  }


  constructor() {
       //inicializo las variables de clase coche
       this.coche = {
        velocidad:0,
        modelo:"Ibiza",
        velocidadMaxima: 140,
        velocidadMarchaAtras: 30,
      }
   }

  ngOnInit(): void {
  }
 

}
