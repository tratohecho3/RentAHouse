import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalPropertiesComponent } from './rental-properties/rental-properties.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { ComparatorComponent } from './comparator/comparator.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SellComponent } from './sell/sell.component';
const routes: Routes = [
  { path: '',redirectTo:'/rentalproperties',pathMatch:'full'},
  { path: 'rentalproperties', component: RentalPropertiesComponent },
  { path: 'comparator', component: ComparatorComponent },
  { path: 'detail/:id', component: HouseDetailComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sell', component: SellComponent}

  

];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}