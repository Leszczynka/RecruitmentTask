import { Injectable } from '@angular/core';
import { Car } from './cars/cars.model';
import { Part } from './cars/cars.model';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = [
    new Car(
      'Mercedes',
      [new Part('Engine', 10000), new Part('Wheel', 2000)]
    ),
    new Car(
      'Toyota',
      [new Part('Engine', 5000), new Part('Wheel', 1000)]
    )
  ];

  setCars(cars: Car[]) {
    this.cars = cars;
  }
  
  getCars() {
    return this.cars.slice();
  }  

  getCar(id: number) {
    return this.cars[id];
  }

  addCar(car: Car) {
    this.cars.push(car);
  }

}
