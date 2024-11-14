import { Component, inject, Input } from '@angular/core';
import { ArticleComponent } from "../../ArticleComponent/article.component";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../Models/article.model';
import { ApiService } from '../../Services/api.service';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  private apiService = inject(ApiService);
  
  articleId!: number;

  article!: Article;

  // article$!:Observable<Article>


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    
    this.apiService.getArticleById(this.articleId).subscribe(data => {
              this.article = data;
            },
            );

  }

  
}
