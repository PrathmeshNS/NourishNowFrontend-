import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgoDashboardComponent } from './ngo/ngo-dashboard/ngo-dashboard.component';
import { NgoNavbarComponent } from './ngo/ngo-navbar/ngo-navbar.component';
import { HotelNavbarComponent } from './hotel/hotel-navbar/hotel-navbar.component';
import { HotelAddMealComponent } from './hotel/hotel-add-meal/hotel-add-meal.component';
import { HotelHistoryComponent } from './hotel/hotel-history/hotel-history.component';
import { HotelViewOrderComponent } from './hotel/hotel-view-order/hotel-view-order.component';
import { HotelListedNgoComponent } from './hotel/hotel-listed-ngo/hotel-listed-ngo.component';
import { NgoRegisterComponent } from './register/ngo-register/ngo-register.component';
import { HotelRegisterComponent } from './register/hotel-register/hotel-register.component';
import { UserWaitingScreenComponent } from './user-waiting-screen/user-waiting-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    NgoDashboardComponent,
    NgoNavbarComponent,
    HotelNavbarComponent,
    HotelAddMealComponent,
    HotelHistoryComponent,
    HotelViewOrderComponent,
    HotelListedNgoComponent,
    NgoRegisterComponent,
    HotelRegisterComponent,
    UserWaitingScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
