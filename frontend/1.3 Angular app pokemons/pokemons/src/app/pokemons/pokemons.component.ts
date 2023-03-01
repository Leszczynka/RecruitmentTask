import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  hidden = false;

  constructor(private pokemonsService: PokemonsService ) {}

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe((response: any) => {
      const data = response.results;
      for (let i = 0; i < data.length; i++) {
        const pokemon: Pokemon = {
          name: data[i].name
        };
        this.pokemons.push(pokemon);
      }
      });
  }
  
  displayList() {
      this.hidden = !this.hidden;
  }
}
