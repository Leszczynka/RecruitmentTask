import { Component, OnInit, Input} from '@angular/core';
import { Car } from '../cars/cars.model';
import { CarService } from '../car.service';
import { PartService } from '../part.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {
  // car: Car;
  @Input() car?: Car;
  id: number;

  constructor(private route: ActivatedRoute,public partService: PartService, public carService: CarService) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.car = this.carService.getCar(this.id);
    }
  )}

  addParts() {
    this.car.parts.forEach(part => {
      this.partService.addParts(part)
    })
  }
}
