import Model, { attr, belongsTo } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr('string') title;
  @attr('string') content;
  @belongsTo('author') author;
}
