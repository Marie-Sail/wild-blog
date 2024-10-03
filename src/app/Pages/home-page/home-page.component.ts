import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from '../../ArticleComponent/article.component';
import { Article } from '../../Models/article.model';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule,ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {


  articleLike!: string;

  handleNotificationLike(message: string) {
    this.articleLike = message;
  }

  
  articles = [
    { 
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 90 
    },
    { 
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 75 
    },
    { 
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 200 
    }
  ];

  

  togglePublication(article: Article): void {
   
    article.isPublished = !article.isPublished;   
   
  }

}
