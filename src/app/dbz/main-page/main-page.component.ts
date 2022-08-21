import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

    nuevo: Personaje = {
    nombre: 'Maestro Rochy',
    poder: 50
  }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  agregarNuevoPersonaje( valorDelHijo: Personaje ): void {
    this.personajes.push( valorDelHijo )
  }


}
