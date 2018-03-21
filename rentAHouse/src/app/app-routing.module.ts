import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalPropertiesComponent } from './rental-properties/rental-properties.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
const routes: Routes = [
  { path: '',redirectTo:'/rentalproperties',pathMatch:'full'},
  { path: 'rentalproperties', component: RentalPropertiesComponent },
  { path: 'detail/:id', component: HouseDetailComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}