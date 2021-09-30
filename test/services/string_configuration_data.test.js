const assert = require('assert');
const app = require('../../src/app');

describe('\'string_configuration_data\' service', () => {
  it('registered the service', () => {
    const service = app.service('string-configuration-data');

    assert.ok(service, 'Registered the service');
  });
});
