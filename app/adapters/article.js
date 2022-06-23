import ApplicationAdapter from './application';

export default class ArticleAdapter extends ApplicationAdapter {
  pathForType() {
    return 'articles.json';
  }
}
