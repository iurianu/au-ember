import EmberRouter from '@ember/routing/router';
import config from 'au-crud-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact');
  this.route('login');
  this.route('about');
  this.route('authors', { path: '/articles/authors' });
  this.route('articles', function () {
    this.route('author', { path: '/authors/:id' });
    this.route('page', { path: '/page/:id' });
    this.route('single', { path: '/:id' });
  });
  this.route('not-found', { path: '/*path' });
});
