import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-add-meal',
  templateUrl: './hotel-add-meal.component.html',
  styleUrls: ['./hotel-add-meal.component.css']
})
export class HotelAddMealComponent {

  title = 'HotelAddMeal';
  foodItems: string = '';
  deliveryType: string = 'Delivery';
  personCount: number | null = null;
  foodContainer: string[]= [];


  addItem(): void {
    console.log('Food Items:', this.foodContainer);
    console.log('Delivery Type:', this.deliveryType);
    console.log('Person Count:', this.personCount);
    // Here you would typically send this data to a service
    alert('Item added successfully!');
    console.log(this.foodContainer)
  }

  addFood() {
    this.foodContainer.push(this.foodItems);
    this.foodItems = ""
  }

  resetForm(): void {
    this.foodItems = '';
    this.deliveryType = 'Pick Deliverable';
    this.personCount = null;
  }
}
