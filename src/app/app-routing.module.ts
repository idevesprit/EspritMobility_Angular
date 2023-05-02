import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AccueilComponent } from './shared/accueil/accueil.component';
import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';
import { RegisterComponent } from './shared/register/register.component';
import {ReclamationComponent} from "./shared/reclamation/reclamation.component";
import {ResetpasswordComponent} from "./shared/resetpassword/resetpassword.component";

const routes: Routes = [

    {path:'',redirectTo:'home' ,pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'accueil',component:AccueilComponent},
    {path:'admin',component:NavAdminComponent},
    {path:'resetpassword',component:ResetpasswordComponent},
    {path:'reclamation',component:ReclamationComponent},
    {path:'register',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
