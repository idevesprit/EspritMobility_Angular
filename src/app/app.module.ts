import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';
import { NavUserComponent } from './shared/nav-user/nav-user.component';
import { FooterComponent } from './shared/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AccueilComponent } from './shared/accueil/accueil.component';
import { LockScreenComponent } from './shared/lock-screen/lock-screen.component';
import { RegisterComponent } from './shared/register/register.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { VerificationMailComponent } from './shared/verification-mail/verification-mail.component';
import { ReclamationComponent } from './shared/reclamation/reclamation.component';
import { ResetpasswordComponent } from './shared/resetpassword/resetpassword.component';
import {AuthenticationGuard} from "./guard/authentication.guard";
import {AuthenticationService} from "./services/authentication.service";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {NotificationService} from "./services/notification.service";
import {NotificationModule} from "./notification.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavAdminComponent,
    NavUserComponent,
    FooterComponent,
    LoginComponent,
    AccueilComponent,
    LockScreenComponent,
    RegisterComponent,
    ProfileComponent,
    VerificationMailComponent,
    ReclamationComponent,
    ResetpasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotificationModule
  ],
  providers: [NotificationService, AuthenticationGuard, AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],

  bootstrap: [AppComponent]
})
export class AppModule { }
