import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectrodomesticosListComponent } from './electrodomesticos-list/electrodomesticos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectrodomesticosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
