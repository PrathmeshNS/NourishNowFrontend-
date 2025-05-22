import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-add-meal',
  templateUrl: './hotel-add-meal.component.html',
  styleUrls: ['./hotel-add-meal.component.css']
})
export class HotelAddMealComponent {

  title = 'HotelAddMeal';
  foodItems: string = '';
  deliveryType: string = 'Pick Deliverable';
  personCount: number | null = null;
  backgroundImage: string | ArrayBuffer | null = null;

  addItem(): void {
    console.log('Food Items:', this.foodItems);
    console.log('Delivery Type:', this.deliveryType);
    console.log('Person Count:', this.personCount);
    // Here you would typically send this data to a service
    alert('Item added successfully!');
    this.resetForm();
  }

  resetForm(): void {
    this.foodItems = '';
    this.deliveryType = 'Pick Deliverable';
    this.personCount = null;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.backgroundImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
