import { moduleFor, test } from 'ember-qunit';

moduleFor('route:books/must-read', 'Unit | Route | books/must read', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
