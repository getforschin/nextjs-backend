// image-configuration-data-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'imageConfigurationData';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  let urltype = {
    url: {
      type: String
    },
    name: {
      type: String
    },
    size: {
      type: Number
    }
  };
  const schema = new Schema({
    name: { type: String,
    required: true 
  },
  images_of_name : [urltype]
}, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
