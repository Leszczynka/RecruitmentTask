import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any;

  constructor(private activatedRoute: ActivatedRoute, private pokemonsService: PokemonsService ) {
  }

  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const nameFromRoute = String(routeParams.get('name'))

    this.pokemonsService.getPokemonDetails(nameFromRoute).subscribe(response => {
      this.pokemon = response;
    })
  }

}
