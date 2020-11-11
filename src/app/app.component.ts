import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  pelicula = {
    titulo: 'Spider-Man',
    fechaLanzamiento: new Date(),
    precio : 1499.99
  };

  duplicarNumero(valor: number): number {
    return valor * 2;
  };
}
