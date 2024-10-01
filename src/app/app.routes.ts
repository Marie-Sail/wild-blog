import { Routes } from '@angular/router';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ArticlePageComponent } from './Pages/article-page/article-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

export const routes: Routes = [ 
    {path:'', component: HomePageComponent},
    {path:'article/:id', component: ArticlePageComponent},
    {path:'**', component:NotFoundComponent},
];
