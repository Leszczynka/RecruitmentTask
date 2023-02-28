import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons:any;
  hidden = false;

  constructor(private pokemonsService: PokemonsService ) {}

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(response => {
      this.pokemons = response;
    });
  }

  displayList() {
      this.hidden = !this.hidden;
  }
}
