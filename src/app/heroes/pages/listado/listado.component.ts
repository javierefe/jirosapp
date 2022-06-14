import { Component, OnInit } from '@angular/core';
import { helloWorld } from 'src/app/utils/utils';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  
  heroes : Heroe[] = [];
  
  constructor( 
    private heroesService: HeroesService
  ) {
    helloWorld();
   }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( response => {
      this.heroes = response;
    })
  }

  
}
