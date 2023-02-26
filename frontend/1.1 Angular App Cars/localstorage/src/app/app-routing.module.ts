import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './cars/car-add/car-add.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: '/cars', component: CarsComponent, 
      children: [
        { path: 'add', component: CarAddComponent },
        { path: ':id', component: CarDetailComponent }
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
