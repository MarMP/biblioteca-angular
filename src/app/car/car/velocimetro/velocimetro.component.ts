import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-velocimetro',
  templateUrl: './velocimetro.component.html',
  styleUrls: ['./velocimetro.component.css']
})
export class VelocimetroComponent implements OnInit {

  @Input() velocidad:number;
  @Input() velocidadMaxima:number;


  constructor() { 
    this.velocidad = 0;
    this.velocidadMaxima = 0;
  }

  ngOnInit(): void {
  }

}
