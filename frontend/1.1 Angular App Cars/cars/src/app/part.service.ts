import { Injectable } from '@angular/core';
import { Part } from './cars/cars.model';
@Injectable({
  providedIn: 'root'
})
export class PartService {

  public parts: Part[] = [
    new Part('Engine', 8000),
    new Part('Wheel', 2000)
  ]

  addParts(part: Part) {
    this.parts.push(part);
  }
}
