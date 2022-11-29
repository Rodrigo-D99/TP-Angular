import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectrodomesticosListComponent } from './electrodomesticos-list/electrodomesticos-list.component';
import { FormsModule } from '@angular/forms';
import { AcmeElectComponent } from './acme-elect/acme-elect.component';
import { CartComponent } from './cart/cart.component';
import { AcmeAboutComponent } from './acme-about/acme-about.component';
@NgModule({
  declarations: [
    AppComponent,
    ElectrodomesticosListComponent,
    
    AcmeElectComponent,
    CartComponent,
    AcmeAboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
