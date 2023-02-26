import { Component, OnInit } from '@angular/core';
import { Part } from '../car-list/car-part/part.model';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  parts: Part[] = [
    new Part('Engine,', 10000),
    new Part('Window', 4000),
  ];

  constructor() {} 

  ngOnInit(): void {
    
  }
}
