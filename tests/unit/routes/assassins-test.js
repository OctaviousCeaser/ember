import { module, test } from 'qunit';
import { setupTest } from 'ember-lesson/tests/helpers';

module('Unit | Route | assassins', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:assassins');
    assert.ok(route);
  });
});
