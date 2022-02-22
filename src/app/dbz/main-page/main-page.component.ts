import { Component } from '@angular/core';

interface Personaje {
  nombre: string,
  poder: number
}

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
    nombre: '',
    poder: 0
  }

  agregar() {
    if(this.nuevo.nombre.trim().length === 0) {
      return;
    }

    /* Agrega el nuevo personaje al arreglo */
    this.personajes.push(this.nuevo);
    
    /* Se reinicia el objeto personaje a valores predeterminados */
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
