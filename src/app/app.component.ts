import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ArticleComponent } from './ArticleComponent/article.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./Components/nav-bar/nav-bar.component";


interface Article {
  title :string
  author :string
  content: string
  image: string
  isPublished:boolean
  comment:string
  likes: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, CommonModule,RouterLink, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Marie !';

}
