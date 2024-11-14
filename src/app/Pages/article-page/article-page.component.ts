import { Component, inject, Input } from '@angular/core';
import { ArticleComponent } from "../../ArticleComponent/article.component";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../Models/article.model';
import { ApiService } from '../../Services/api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent, CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  private apiService = inject(ApiService);
  
  articleId!: number;

  article$!:Observable<Article>;


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.article$ = this.apiService.getArticleById(this.articleId)
    
    });
    
   

  }


}
