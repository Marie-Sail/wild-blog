import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from '../../ArticleComponent/article.component';
import { Article } from '../../Models/article.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule,ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  articles$!: Observable<Article[]>;
  http= inject(HttpClient);
  // articles: Article[] = [];

  ngOnInit(){
    this.getArticles();
  }

  getArticles(){
   this.articles$ = this.http.get<Article[]>('http://localhost:3000/articles');

  //  this.http.get<Article[]>('http://localhost:3000/articles').subscribe(
  //   data => {
  //   this.articles = data;
  //   console.log('Données reçues:', data);
  //   },
  //   error => console.error('Erreur:', error)
  //   );
   
  }


  articleLike!: string;

  handleNotificationLike(message: string) {
    this.articleLike = message;
  }

  
  // articles: Article[] = [
  //   {
  //     id: "1",
  //     title: 'Angular 16: Les nouveautés',
  //     content: "Les nouveautés d'Angular 16 incluent...",
  //     createdAt: new Date('2023-05-01'),
  //     image: 'https://placehold.co/150x150',
  //     likeCount: 233,
  //     isPublished: true,
  //     categoryName: 'Angular',
  //     isLiked: false,
  //   },
  //   {
  //     id: "2",
  //     title: 'Développer une API REST',
  //     content: 'Développer une API REST nécessite de bonnes pratiques...',
  //     createdAt: new Date('2023-04-15'),
  //     image: 'https://placehold.co/150x150',
  //     likeCount: 99,
  //     isPublished: true,
  //     categoryName: 'API',
  //     isLiked: false,
  //   },
  //   {
  //     id: "3",
  //     title: 'Pourquoi TypeScript est essentiel ?',
  //     content: 'TypeScript apporte de la robustesse au code JavaScript...',
  //     createdAt: new Date('2023-03-12'),
  //     image: 'https://placehold.co/150x150',
  //     likeCount: 95,
  //     isPublished: true,
  //     categoryName: 'JavaScript',
  //     isLiked: false,
  //   },
  //   {
  //     id: "4",
  //     title: 'Les bases de Spring Boot',
  //     content: 'Spring Boot simplifie le développement Java...',
  //     createdAt: new Date('2023-02-20'),
  //     image: 'https://placehold.co/150x150',
  //     likeCount: 80,
  //     isPublished: true,
  //     categoryName: 'Spring',
  //     isLiked: false,
  //   },
  //   {
  //     id: "5",
  //     title: 'Introduction à RxJS',
  //     content: 'RxJS facilite la gestion des données asynchrones...',
  //     createdAt: new Date('2023-01-15'),
  //     image: 'https://placehold.co/150x150',
  //     likeCount: 65,
  //     isPublished: false,
  //     categoryName: 'JavaScript',
  //     isLiked: false,
  //   },
  //   {
  //     id: "6",
  //     title: 'Node.js pour les débutants',
  //     content: "Node.js permet d'utiliser JavaScript côté serveur...",
  //     createdAt: new Date('2023-01-01'),
  //     image: 'https://placehold.co/150x150',
  //     likeCount: 150,
  //     isPublished: true,
  //     categoryName: 'JavaScript',
  //     isLiked: false,
  //   }
    
  // ];

  togglePublication(article: Article): void {
   
    article.isPublished = !article.isPublished;   
   
  }

}
