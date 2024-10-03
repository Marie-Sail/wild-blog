import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../Models/article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input() article!: Article;



  @Output() notifyParent: EventEmitter<string>= new EventEmitter<string>();


  addLike() {
    
    this.notifyParent.emit(this.article.title);
    this.article.likes++
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

}
