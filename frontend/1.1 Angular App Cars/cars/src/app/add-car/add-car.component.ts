import { Component, OnInit } from '@angular/core';
import { Car } from '../cars/cars.model';
import { FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import { CarService } from '../car.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  addCarForm;
  newForm: boolean = false;

  constructor(public route: ActivatedRoute, public carService: CarService, public router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.newForm = params['id'] === undefined;
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  initForm() {
    var name = '';
    var parts = new FormArray([]);

    if (this.editMode) {
      let car = this.carService.getCar(this.id);
      name = car.name;

      if (car['parts']) {
        for (let part of car.parts) {
          parts.push(
            new FormGroup({
              name: new FormControl(part.name, Validators.required),
              price: new FormControl(part.price, Validators.required)
            })
          )
        }
      }
    }

    this.addCarForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'parts': parts
    })
  }

  onAddPart() {
    this.editMode = true;
    (<FormArray>this.addCarForm.get('parts')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'price': new FormControl(null, Validators.required)
      })
    );
  }

  onSubmit() {
    const newCar = new Car(this.addCarForm.value['name'], this.addCarForm.value['parts'])
    if (!this.newForm) {
      this.carService.updateCar(this.id, newCar);
      this.router.navigate(['/', this.id]);
    } else {
      this.carService.addCar(newCar);
      this.router.navigate(['/'])
    }
  };
}
