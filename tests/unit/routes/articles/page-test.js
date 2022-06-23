import { module, test } from 'qunit';
import { setupTest } from 'au-crud-app/tests/helpers';

module('Unit | Route | articles/page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:articles/page');
    assert.ok(route);
  });
});
