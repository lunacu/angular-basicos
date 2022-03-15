import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[  //las declaraciones de los componentes que forman el modulo estos no se ven desde afuera
        heroeComponent,
        ListadoComponent
    ],
    exports:[   // esto es lo que exportamos para aguera esto es lo que se va a ver de forma global fuera del modulo
        ListadoComponent
    ],
    imports:[   //aqui van modulos, son objetos que van en el modulo, aca solo van modulos
        CommonModule // el commonModule es el que me permise hacer el *ngFor o el *ngIf es un modulo propio de angular con sus funcionalidades
    ]
})
export class HeroesModule{

}