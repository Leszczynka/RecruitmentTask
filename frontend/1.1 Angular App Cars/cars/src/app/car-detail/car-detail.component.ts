import { Component, OnInit, Input} from '@angular/core';
import { Car } from '../cars/cars.model';
import { CarService } from '../car.service';
import { PartService } from '../part.service';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {
  @Input() car?: Car;
  
  id: number;
  constructor(public partService: PartService, public carService: CarService) {}
  ngOnInit() {
    this.car = this.carService.getCar(this.id)
  }

  addParts() {
    this.car.parts.forEach(part => {
      this.partService.addParts(part)
    })
  }
  
}
