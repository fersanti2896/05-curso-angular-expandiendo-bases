import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /* Output sirve para emitir eventos, en este caso de tipo Personaje */
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  agregar() {
    if(this.nuevo.nombre.trim().length === 0) {
      return;
    }

    /* Aquí se emite al componente padre */
    this.onNuevoPersonaje.emit(this.nuevo);
    
    /* Agrega el nuevo personaje al arreglo */
    // this.personajes.push(this.nuevo);

    /* Se reinicia el objeto personaje a valores predeterminados */
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
