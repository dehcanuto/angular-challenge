import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon, PokemonSingle } from '../pokemon/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  listPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}?limit=10`);
  }

  getPokemonImage(index: number): Observable<PokemonSingle> {
    return this.http.get<PokemonSingle>(`${this.url}${index}`);
  }
}
