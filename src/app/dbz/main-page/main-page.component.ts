import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes
  // }


  // constructor(
  //   private dbzService: DbzService
  // ) {}

    nuevo: Personaje = {
    nombre: 'Maestro Rochy',
    poder: 50
  }

  // agregarNuevoPersonaje( valorDelHijo: Personaje ): void {
  //   this.personajes.push( valorDelHijo )
  // }


}
