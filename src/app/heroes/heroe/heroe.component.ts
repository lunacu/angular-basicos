import { Component } from "@angular/core"; //importo el decorador de angular core


@Component({    //genero el decorador con el nombre y enlazo con el html para este componente
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class heroeComponent{
    nombre:string = 'IronMan';
    edad:number = 45;

    get nombreCapitalizado():string{   //puedo hacerle los gets y sets 
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return ` ${this.nombre} - ${this.edad} `; // las `` son template literales osea html directo 
    }

    cambiarNombre():void{
        this.nombre = 'Spider-Man';
    }

    cambiarEdad():void{
        this.edad = 30;
    }

}