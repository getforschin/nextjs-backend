// product-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'product';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },

    tabular_data: [
      {
        model: {
          type: String,
          required: true
        },
        specification: {
          type: String,
          required: true
        },
        unit: {
          type: String,
          required: true
        },
        value: {
          type: String,
          required: true
        }
      }
    ],
    common_detail: [
      {
        heading: {
          type: String,
          required: true
        },
        data: {
          type: String,
          required: true
        }
      }

    ],
   


    cover: [{ type: Schema.Types.ObjectId, ref: 'photosCollection' }],



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
