import { Injectable } from '@angular/core';
import { Car } from './cars/cars.model';
import { Part } from './cars/cars.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  carsChanged = new Subject<Car[]>()

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
    this.carsChanged.next(this.cars.slice())
    localStorage.setItem('car', JSON.stringify(this.cars))

  }

  getCars() {
    const cars = localStorage.getItem('car');
    if (cars) {
      this.cars = JSON.parse(cars);
    } else {
      this.cars = [];
    }
    return this.cars.slice();
  }  

  getCar(id: number) {
    return this.cars[id];
  }

  addCar(car: Car) {
    this.cars.push(car);
    this.carsChanged.next(this.cars.slice());
    localStorage.setItem('car', JSON.stringify(this.cars))
  }

  updateCar(id:number, newCar: Car) {
    this.cars[id] = newCar;
    this.carsChanged.next(this.cars.slice());
    localStorage.setItem('car', JSON.stringify(this.cars))
  }

}
