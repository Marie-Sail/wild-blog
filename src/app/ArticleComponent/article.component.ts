import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../Models/article.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input() article!: Article;

  @Output() notifyParent: EventEmitter<string>= new EventEmitter<string>();

  addLike() {
    
    this.notifyParent.emit(this.article.title);
    this.article.likeCount++
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

}
