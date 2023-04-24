import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';
import { NavUserComponent } from './shared/nav-user/nav-user.component';
import { FooterComponent } from './shared/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AccueilComponent } from './shared/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavAdminComponent,
    NavUserComponent,
    FooterComponent,
    LoginComponent,
    AccueilComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
