// customerDetail-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html

// for more of what you can do here.
module.exports = function (app) {
  const modelName = "customerDetail";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      about_us: [
        {
          text: {
            type: String,
          },
        },
      ],

      manufacturing_process: [
        {
          text: {
            type: String,
          },
        },
      ],

      research_development: [
        {
          type: String,
        },
      ],

      client: [
        {
          name: {
            type: String,
          },
          photo: {
            type: Schema.Types.ObjectId,
            ref: "photosCollection",
          },
        },
      ],

      quality_standard: [
        {
          name: {
            type: String,
          },
          photo: {
            type: Schema.Types.ObjectId,
            ref: "photosCollection",
          },
        },
      ],

      phone_number: {
        type: String,
      },

      name_of_company: {
        type: String,
      },

      fax_number: {
        type: String,
      },

      email_id: {
        type: String,
      },

      factory_detail: [
        {
          text: {
            type: String,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
