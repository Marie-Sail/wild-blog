import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ArticlePageComponent } from './Pages/article-page/article-page.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'article/:id', component: ArticlePageComponent},
   {path:'form',component:ContactFormComponent}, 
   {path:'**', component:NotFoundComponent},
    
];
