import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AccueilComponent } from './shared/accueil/accueil.component';
import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';
import {ListUniversiteComponent} from "./universite/list-universite/list-universite.component";
import {AddUniversiteComponent} from "./universite/add-universite/add-universite.component";
import {DeleteComponent} from "./universite/delete/delete.component";
import {DetailsComponent} from "./universite/details/details.component";
import {UpdateComponent} from "./universite/update/update.component";
import {OffreUniversityComponent} from "./offre/offre-university/offre-university.component";
import {NavUniversiteComponent} from "./universite/nav-universite/nav-universite.component";
import {OurOffreComponent} from "./universite/our-offre/our-offre.component";
import {CandidatureComponent} from "./universite/candidature/candidature.component";
import {EntretienComponent} from "./entretien/entretien/entretien.component";
import {DeleteoffreComponent} from "./offre/deleteoffre/deleteoffre.component";
import {AddeoffreComponent} from "./offre/addeoffre/addeoffre.component";
import {ListentretienComponent} from "./entretien/listentretien/listentretien.component";
import {NotfoundComponent} from "./shared/notfound/notfound.component";

const routes: Routes = [
  {  path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
      {path:'accueil',component:AccueilComponent},
  {path:'listuniversite',component:ListUniversiteComponent},
  {path:'adduniversite',component:AddUniversiteComponent},
  {path:'addoffre',component:AddeoffreComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'deleteoffre/:id',component:DeleteoffreComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'offreUniversite/:id',component:OffreUniversityComponent},
  {path:'universite',component:NavUniversiteComponent},
  {path:'ouroffre',component:OurOffreComponent},
  {path:'candidature',component:CandidatureComponent},
  {path:'addentretien',component:EntretienComponent},
  {path:'listentretien',component:ListentretienComponent},
      {path:'admin',component:NavAdminComponent},











  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
