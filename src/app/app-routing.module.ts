import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgoRegisterComponent } from './register/ngo-register/ngo-register.component';
import { HotelRegisterComponent } from './register/hotel-register/hotel-register.component';
import { HotelHistoryComponent } from './hotel/hotel-history/hotel-history.component';
import { HotelAddMealComponent } from './hotel/hotel-add-meal/hotel-add-meal.component';
import { HotelListedNgoComponent } from './hotel/hotel-listed-ngo/hotel-listed-ngo.component';
import { HotelViewOrderComponent } from './hotel/hotel-view-order/hotel-view-order.component';
import { HotelNavbarComponent } from './hotel/hotel-navbar/hotel-navbar.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: "register", children: [
      {
        path: 'ngo', component: NgoRegisterComponent
      },
      {
        path: 'hotel', component: HotelRegisterComponent
      },
    ]
  },

  {
    path: 'hotel', children: [
      {
        path: '', component: HotelAddMealComponent, pathMatch: 'full'
      },
      {
        path: 'navbar', component: HotelNavbarComponent, pathMatch: 'full'
      },
      {
        path: 'history', component: HotelHistoryComponent
      }, 
      {
        path: 'listed-ngo', component:HotelListedNgoComponent
      },
      {
        path:'view-order', component:HotelViewOrderComponent
      },
    ],
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

