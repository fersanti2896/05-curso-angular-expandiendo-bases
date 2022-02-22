import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

/* Injectable le dice que es una clase que se va inyectar */
@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        {
          nombre: 'Gokú',
          poder: 180000
        },
        {
          nombre: 'Vegeta',
          poder: 60000
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    constructor() { }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}