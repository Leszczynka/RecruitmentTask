import { Component, OnInit} from '@angular/core';
import { CarService } from '../car.service';
import { Car } from './cars.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(public carService: CarService) {}
   
  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  selectedCar?: Car;
  
  onSelect(car: Car): void {
    this.selectedCar = car;
  }

}
