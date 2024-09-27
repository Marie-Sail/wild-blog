import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  article = {
    title: 'Salut salut',
    author: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit lorem, posuere vitae malesuada vitae, fringilla at enim. Cras interdum orci eu dolor ullamcorper fringilla. Nullam pharetra, massa sit amet commodo varius, ligula dui sagittis arcu, non lacinia risus sapien sit amet velit. Cras cursus tortor interdum enim dictum rutrum. Praesent eget neque at augue laoreet interdum eu nec risus. Integer vehicula ligula quis arcu posuere, id commodo lorem mattis. Suspendisse sodales elementum bibendum. Nullam rutrum mauris ac erat pellentesque, a semper neque blandit. Sed congue, neque vestibulum pulvinar ullamcorper, ante turpis fringilla nulla, non pellentesque massa quam et ante. Quisque congue enim vitae orci vestibulum lacinia. Donec at risus massa. Curabitur ut turpis condimentum, venenatis eros eu, commodo neque. Pellentesque ullamcorper sed erat eget scelerisque. Pellentesque vitae lacus nec felis cursus consequat. Maecenas dictum vestibulum mattis.',
    image: 'https://via.placeholder.com/350x150',
    isPublished: true,
    comment: ''
  };

  

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

}
