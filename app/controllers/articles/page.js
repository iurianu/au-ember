import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ArticlesPageController extends Controller {
  @service store;

  queryParams = ['page', 'size'];
  @tracked page = 1;
  @tracked size = 8;
}
