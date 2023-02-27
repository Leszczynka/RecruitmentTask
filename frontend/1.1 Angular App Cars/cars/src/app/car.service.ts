import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './cars/cars.model';
import { CARS } from './mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = CARS;

  getCar(index: number) {
    return this.cars[index];
  }

  getCars() {
    return this.cars.slice();
  }

  getCarParts(index:number) {
    return this.cars[index]['parts']
  }
}
