import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AccueilComponent } from './shared/accueil/accueil.component';
import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';

const routes: Routes = [
  {  path:'',redirectTo:'home' ,pathMatch:'full'
  
  }
  ,
  {
    path:'home',component:HomeComponent},
    {
      path:'login',component:LoginComponent},
      {
        path:'accueil',component:AccueilComponent}
        ,
      {
        path:'admin',component:NavAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
