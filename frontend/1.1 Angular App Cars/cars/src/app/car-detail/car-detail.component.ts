import { Component, OnInit, Input} from '@angular/core';
import { Car } from '../cars/cars.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent {
  @Input() car?: Car;
}
