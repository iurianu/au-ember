import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ArticlesIndexRoute extends Route {
  @service store;
  @service router;

  beforeModel() {
    this.router.transitionTo('articles.page', '1'); // Implicitly aborts the on-going transition.
  }
}
