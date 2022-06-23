import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ArticlesSingleRoute extends Route {
  @service store;

  model(params) {
    return this.store.query('article', { id: params.id });
  }
}
