import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthorsRoute extends Route {
  @service store;

  async model() {
    const users = await this.store.findAll('author');
    const authors = users.sortBy('username');

    return authors;
  }
}
