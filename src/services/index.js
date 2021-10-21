const users = require('./users/users.service.js');
const product = require('./product/product.service.js');
const stringConfigurationData = require('./string_configuration_data/string_configuration_data.service.js');
const imageConfigurationData = require('./image-configuration-data/image-configuration-data.service.js');
const photosCollection = require('./photos-collection/photos-collection.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(product);
  app.configure(stringConfigurationData);
  app.configure(imageConfigurationData);
  app.configure(photosCollection);
};
