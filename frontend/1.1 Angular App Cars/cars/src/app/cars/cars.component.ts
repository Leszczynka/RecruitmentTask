import { Component, OnInit} from '@angular/core';
import { Car } from './cars.model';
import { Part } from './cars.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {
  cars: Car[] = [
    {
      id: 1,
      name: 'Mercedes',
      parts: [
        {name: 'engine', price: 10000},
        {name: 'wheel', price: 2000}
      ]
    },
    {
      id: 2,
      name: 'Toyota',
      parts: [
        {name: 'engine', price: 5000},
        {name: 'wheel', price: 1000}
      ]
    }
  ]

  selectedCar?: Car;
  onSelect(car: Car): void {
    this.selectedCar = car;
  }

}
