import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  /* Con el input le decimos a Angular que traiga las propiedades del componente raiz o padre */
  // @Input() personajes: Personaje[] = []

  get personajes() {
    return this.dbzService.personajes;
  }
  
  constructor(private dbzService: DbzService) { }
}
