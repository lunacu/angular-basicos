import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

heroes: string[] = ['Spider-Man','Iron-Man','Hulk','Thor','Capitan America'];  
heroeBorrado: string = '';

borrarHeroe():void{
  console.log('Borrando...');

  this.heroeBorrado = this.heroes.pop() || '';  // en el ejercicio el .pop devuelve o sting o undefined con || le estoy diciendo que si no hay string me devuelva string vacio y asi elimino el error de tipo
}

}
