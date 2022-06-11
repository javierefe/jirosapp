import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    debugger
    this.heroesService.getHeroes().subscribe( response => {
      
      console.log(response)
      this.heroes = response;
    })

    console.log(this.heroes)
  }

  
}
