import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  peliculas;
  ngOnInit(): void {setTimeout(() => {
    this.peliculas = [{
      titulo: 'Spider-Man - Far from home',
      fechaLanzamiento: new Date(),
      precio: 1499.99
    },{
      titulo: 'toy story',
      fechaLanzamiento: new Date('2000-11-15'),
      precio: 499.99
    }]
  }, 1000);
  }

}
