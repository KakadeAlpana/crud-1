import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewAllPersonsComponent } from './view-all-persons/view-all-persons.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPersonComponent,
    ViewPersonComponent,
    ViewAllPersonsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
