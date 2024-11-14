import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from '../../ArticleComponent/article.component';
import { Article } from '../../Models/article.model';
import { Observable } from 'rxjs';
import { ApiService } from '../../Services/api.service';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule,ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  articles$!: Observable<Article[]>;

  private apiService = inject(ApiService);

  ngOnInit(){
    this.articles$ = this.apiService.getArticles();
  }

  articleLike!: string;

  handleNotificationLike(message: string) {
    this.articleLike = message;
  }

  togglePublication(article: Article): void {
   
    article.isPublished = !article.isPublished;   
   
  }

}
