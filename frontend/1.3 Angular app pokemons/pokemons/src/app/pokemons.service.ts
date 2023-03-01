import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private urlAll = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
  private urlOne = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private httpClient: HttpClient) { }

  getPokemons() {
    return this.httpClient.get(this.urlAll);
  }

  getPokemonDetails(name: string) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/`+ name);
  }
}
