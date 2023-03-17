import { Component, OnInit } from '@angular/core';
import { PokemonSingle, Result } from './pokemon/pokemon.interface';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  pokemons: Result[] = [];
  
  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.service.listPokemons()
    .subscribe(data => {
      const { results } = data;
      results.forEach((item: Result, index) => {
        this.service.getPokemonImage(index+1)
          .subscribe((image: PokemonSingle) => {
            this.pokemons.push({...item, image: image.sprites.front_default});
        });
      });
    });
  }

}
