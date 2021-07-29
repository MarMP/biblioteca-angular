import { Injectable } from "@angular/core";
import { CalculoService } from "../calculo.service";

export interface CultureConversion {

    //variables y metodos de la interfaz que luego usaremos
    culturaOrigen:string;
    culturaDestino:string;

    //funcion que recibe como parametro un numero y devuelve un numero
    convertirMedidas:(source:number)=>number;
}

@Injectable({
    providedIn: 'root'
})

//clase abstracta
export abstract class ConversionService implements CultureConversion {
    culturaOrigen: string;
    culturaDestino: string;
    convertirMedidas: (source: number) => number;

    constructor(public calculoservice: CalculoService) {
        //comportamiento por defecto, en el constructor obliga a poner algo
        this.culturaDestino = "Europea";
        this.culturaOrigen = "Inglesa";
        this.convertirMedidas = this.calculoservice.fromLitrosAPintas;
        //this.convertirMedidas = this.calculoservice =(n)=>0;
    }

}
