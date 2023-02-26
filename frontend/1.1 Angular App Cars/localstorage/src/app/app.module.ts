import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarPartComponent } from './cars/car-list/car-part/car-part.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsListComponent } from './cars/car-list/cars-list.component';
import { CarAddComponent } from './cars/car-add/car-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsListComponent,
    CarDetailComponent,
    CarPartComponent,
    DashboardComponent,
    CarAddComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
