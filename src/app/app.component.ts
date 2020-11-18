import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1499.99
      },{
        titulo: 'toy story',
        fechaLanzamiento: new Date('2000-11-15'),
        precio: 499.99
      }]
    }, 3000);
  }
  title = 'front-end';

  peliculasEnCines;
  peliculasProximosEstrenos = [];

  duplicarNumero(valor: number): number {
    return valor * 2;
  };
}
