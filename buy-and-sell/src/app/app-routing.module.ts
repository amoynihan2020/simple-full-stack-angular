import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingsPageComponent } from './edit-listings-page/edit-listings-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingComponent } from './new-listing/new-listing.component';
const routes: Routes = [
  {path:'', redirectTo:'/listings', pathMatch:'full'},
  {path:'listings', component: ListingsPageComponent, pathMatch: 'full'},
  {path: 'listings/:id', component:ListingDetailPageComponent, },
  {path: 'contact/:id', component:ContactPageComponent},
  {path: 'edit-listing/:id', component:EditListingsPageComponent},
  {path: 'my-listings', component:MyListingsPageComponent}, 
  {path: 'new-listing', component:NewListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
