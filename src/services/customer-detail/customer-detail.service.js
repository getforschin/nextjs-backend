// Initializes the `customerDetail` service on path `/customer-detail`
const { CustomerDetail } = require('./customer-detail.class');
const createModel = require('../../models/customer-detail.model');
const hooks = require('./customer-detail.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/customer-detail', new CustomerDetail(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('customer-detail');

  service.hooks(hooks);
};
