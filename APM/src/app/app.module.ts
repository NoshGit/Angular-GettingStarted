import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './pipes/covert-to-space.pipes';
import { FilterArray } from './pipes/filter-array.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailGuard } from './products/product-detail.guard';

const routes: Routes = [
  {path:'products', component:ProductListComponent},
  {
    path:'products/:id',
    canActivate:[ProductDetailGuard], 
    component:ProductDetailsComponent
  },
  {path:'welcome', component:WelcomeComponent},
  {path:'', redirectTo:'welcome', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent, pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,    
    ConvertToSpacesPipe,
    FilterArray,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
