import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ArticlePageComponent } from './Pages/article-page/article-page.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './Pages/signup-form/signup-form.component';
import {LoginFormComponent} from "./login-form/login-form.component";
import {ProfilePageComponent} from "./Pages/profile-page/profile-page.component";
import {roleGuard} from "./guards/role.guard";
import {visitorOnlyGuard} from "./guards/visitor-only.guard";
import {AdminPageComponent} from "./Pages/admin-page/admin-page.component";
import {LoginPageComponent} from "./Pages/login-page/login-page.component";

function AuthGuard() {

}

export const routes: Routes = [
  {path:'', component: HomePageComponent, pathMatch: 'full'},
  {path:'article/:id', component: ArticlePageComponent},
  {path:'form',component:SignupFormComponent},
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [roleGuard('admin')]
  },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [visitorOnlyGuard]
  },
  {path:'**', component:NotFoundComponent},

];
