import { Injectable } from "@angular/core";

/* Injectable le dice que es una clase que se va inyectar */
@Injectable()
export class DbzService {
    constructor() {
        console.log('Servicio inicializado');
    }
}