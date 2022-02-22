import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Gokú',
      poder: 180000
    },
    {
      nombre: 'Vegeta',
      poder: 60000
    }
  ];

  nuevo: Personaje = {
    nombre: 'Picoro',
    poder: 100000
  }
  
  agregarNuevoPersonaje(argumento: Personaje) {
    // debugger; Nos ayuda a la depuración
    this.personajes.push(argumento);
  }

  /* Hacemos una inyección de dependencia, en este caso del servicio */
  constructor(private dbzService: DbzService) { }
}
