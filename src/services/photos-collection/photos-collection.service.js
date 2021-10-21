// Initializes the `photos-collection` service on path `/photos-collection`
const { PhotosCollection } = require('./photos-collection.class');
const createModel = require('../../models/photos-collection.model');
const hooks = require('./photos-collection.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/photos-collection', new PhotosCollection(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('photos-collection');

  service.hooks(hooks);
};
