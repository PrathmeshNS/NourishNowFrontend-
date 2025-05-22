import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-navbar',
  templateUrl: './hotel-navbar.component.html',
  styleUrls: ['./hotel-navbar.component.css']
})
export class HotelNavbarComponent {
  navLinks = [
    { name: "Add Meal", route: "/add-meal", active: false },
    { name: "History", route: "/history", active: false },
    { name: "Listed Ngo", route: "/listed-ngo", active: true },
    { name: "View order", route: "/view-order", active: false },
  ]

  setActive(index: number): void {
    this.navLinks.forEach((link, i) => {
      link.active = i === index
    })
  }
}
