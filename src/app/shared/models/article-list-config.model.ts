export class ArticleListConfig {
  type = 'all';

  filters: {
    tag?: string,
    author?: string,
    favorited?: string,
    downvoted?: string,
    limit?: number,
    offset?: number,
    title?: string
  } = {};
}
