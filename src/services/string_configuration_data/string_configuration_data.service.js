// Initializes the `string_configuration_data` service on path `/string-configuration-data`
const { StringConfigurationData } = require('./string_configuration_data.class');
const createModel = require('../../models/string_configuration_data.model');
const hooks = require('./string_configuration_data.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/string-configuration-data', new StringConfigurationData(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('string-configuration-data');

  service.hooks(hooks);
};
