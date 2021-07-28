import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pedales',
  templateUrl: './pedales.component.html',
  styleUrls: ['./pedales.component.css']
})
export class PedalesComponent implements OnInit {

  //evento de los botones
  @Output() acelerar = new EventEmitter<number>();
  @Output() frenar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
