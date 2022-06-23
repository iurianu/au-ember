import { module, test } from 'qunit';
import { setupTest } from 'au-crud-app/tests/helpers';

module('Unit | Route | articles/single', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:articles/single');
    assert.ok(route);
  });
});
