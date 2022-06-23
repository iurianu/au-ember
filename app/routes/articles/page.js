import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ArticlesPageRoute extends Route {
  @service store;
  @service router;

  queryParams = {
    page: {
      refreshModel: true,
    },
    size: {
      refreshModel: true,
    },
  };

  async model(params) {
    const articles = await this.store.query('article', {
      page: {
        number: params.page,
        size: params.size,
      },
    });

    //debugger;

    const sortedArray = articles.sortBy('id:asc').reverse(),
      arrLength = articles.length,
      firstIndex = params.size * (params.id - 1),
      nextIndex = params.size * params.id;

    let lastIndex;

    if (nextIndex <= params.size) {
      lastIndex = arrLength;
    } else {
      lastIndex = nextIndex;
    }

    const articlesPage = sortedArray.slice(firstIndex, lastIndex),
      currentPage = Math.ceil(lastIndex / params.size),
      firstPage = 1,
      nextPage = currentPage + 1,
      prevPage = currentPage - 1,
      lastPage = Math.ceil(arrLength / params.size);

    console.log('The page to show is', articlesPage);
    console.log('Total number of posts is: ', arrLength);
    console.log('Total number of pages is: ', lastPage);
    console.log('Start index is', firstIndex);
    console.log('Ending index is', lastIndex);
    console.log('Current page number is', currentPage);
    console.log('The previous page is', prevPage);
    console.log('The next page is', nextPage);

    if (params.id > 0 && params.id <= lastPage) {
      return RSVP.hash({
        currentPage,
        articlesPage,
        firstPage,
        prevPage,
        nextPage,
        lastPage,
      });
    } else {
      this.router.transitionTo('not-found', 404);
    }
  }

  setupController(controller, model) {
    controller.setProperties(model);
    console.log('controlled model', model);
  }
}
