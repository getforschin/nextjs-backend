const assert = require('assert');
const app = require('../../src/app');

describe('\'customerDetail\' service', () => {
  it('registered the service', () => {
    const service = app.service('customer-detail');

    assert.ok(service, 'Registered the service');
  });
});
