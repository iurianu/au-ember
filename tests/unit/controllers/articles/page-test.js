import { module, test } from 'qunit';
import { setupTest } from 'au-crud-app/tests/helpers';

module('Unit | Controller | articles/page', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:articles/page');
    assert.ok(controller);
  });
});
