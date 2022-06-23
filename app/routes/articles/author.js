import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ArticlesAuthorRoute extends Route {
  @service store;

  model(params) {
    console.log('params: ', params);

    return this.store.findAll('article', { userId: params.id });
  }
}
