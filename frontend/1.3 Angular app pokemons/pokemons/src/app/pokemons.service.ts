import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

  constructor(private httpClient: HttpClient) { }

  getPokemons() {
    return this.httpClient.get(this.url);
  }

  getPokemonDetails(name: string) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/`+ name);
  }
}
