import { Component, Input } from '@angular/core';

import { Article } from '../models';

@Component({
  selector: 'article-preview',
  templateUrl: './article-preview.component.html'
})
export class ArticlePreviewComponent {
  @Input() article: Article;

  onToggleFavorite(favorited: boolean) {
    this.article['favorited'] = favorited;

    if (favorited) {
      this.article['favoritesCount']++;
      if (this.article['downvoted']) {
        this.article['downvoted'] = false;
        this.article['downvotesCount']--;
      }
    } else {
      this.article['favoritesCount']--;
    }
  }

  onToggleDownvote(downvoted: boolean) {
    this.article['downvoted'] = downvoted;

    if (downvoted) {
      this.article['downvotesCount']++;
      if (this.article['favorited']) {
        this.article['favorited'] = false;
        this.article['favoritesCount']--;
      }
    } else {
      this.article['downvotesCount']--;
    }
  }
}
