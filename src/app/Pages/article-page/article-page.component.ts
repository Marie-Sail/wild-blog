import { Component, inject, Input } from '@angular/core';
import { ArticleComponent } from "../../ArticleComponent/article.component";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../Models/article.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  http= inject(HttpClient);
  
  articleId!: number;

  article!: Article;


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.getArticleById(this.articleId)
  }

  getArticleById(id: number){

    this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe(data => {
      this.article = data;
    },
    );
  }


}
