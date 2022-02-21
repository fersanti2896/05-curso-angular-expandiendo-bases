import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    /* Que es lo que contiene este modulo, como componentes, types */
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /* Las cosas que se haran publicas o visibles */
    exports: [
        ListadoComponent
    ],
    /* Van módulos */
    imports: [
        /* Es la que ofrece las directivas ngIf e ngFor */
        CommonModule 
    ]
})
export class HeroesModule {

}