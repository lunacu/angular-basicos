import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [     //aca van componentes
    AppComponent  
  ],
  imports: [          //aca modulos
    BrowserModule,
    HeroesModule,      //aca cargue el modulo entero de heroes en ves de cargar por componentes
    ContadorModule
  ],
  providers: [],      //servicios especificos a un modulo
  bootstrap: [AppComponent] //este es el componente principal, el que se va a iniciar 
})
export class AppModule { }
