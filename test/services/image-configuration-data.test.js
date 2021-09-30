const assert = require('assert');
const app = require('../../src/app');

describe('\'image-configuration-data\' service', () => {
  it('registered the service', () => {
    const service = app.service('image-configuration-data');

    assert.ok(service, 'Registered the service');
  });
});
