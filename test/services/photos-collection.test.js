const assert = require('assert');
const app = require('../../src/app');

describe('\'photos-collection\' service', () => {
  it('registered the service', () => {
    const service = app.service('photos-collection');

    assert.ok(service, 'Registered the service');
  });
});
