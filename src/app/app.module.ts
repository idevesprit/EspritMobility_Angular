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
import {ListUniversiteComponent} from "./universite/list-universite/list-universite.component";
import {AddUniversiteComponent} from "./universite/add-universite/add-universite.component";
import { DeleteComponent } from './universite/delete/delete.component';
import { DetailsComponent } from './universite/details/details.component';
import { UpdateComponent } from './universite/update/update.component';
import { OffreUniversityComponent } from './offre/offre-university/offre-university.component';
import { NavUniversiteComponent } from './universite/nav-universite/nav-universite.component';
import { OurOffreComponent } from './universite/our-offre/our-offre.component';
import { CandidatureComponent } from './universite/candidature/candidature.component';
import { EntretienComponent } from './entretien/entretien/entretien.component';
import { DeleteoffreComponent } from './offre/deleteoffre/deleteoffre.component';
import { ListentretienComponent } from './entretien/listentretien/listentretien.component';
import { AddeoffreComponent } from './offre/addeoffre/addeoffre.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavAdminComponent,
    NavUserComponent,
    FooterComponent,
    LoginComponent,
    AccueilComponent,
    ListUniversiteComponent,
    AddUniversiteComponent,
    DeleteComponent,
    DetailsComponent,
    UpdateComponent,
    OffreUniversityComponent,
    NavUniversiteComponent,
    OurOffreComponent,
    CandidatureComponent,
    EntretienComponent,
    DeleteoffreComponent,
    ListentretienComponent,
    AddeoffreComponent,
    NotfoundComponent

  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
