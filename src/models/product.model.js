// product-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'product';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  let urltype = {
    data: {
      type: Buffer
    },
    contentType : {
      type : String
    }
  };
  const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    description : {
      type : String
    },
    // scope_of_supply : {
    //   type : String
    // },
    // inspection_test_certificate  : {
    //   type : String
    // },
    model : [{
      name : {
        type :String
      },
      sequence_number : {
        type : Number
      }
    }],

    specification : [{
      name : {
        type : String
      },
      unit : {
        type :String,
        default : "NA"
      },
      same_for_all_model_flag : {
        type : Boolean,
        default : true
      }
    }],

    cover : [urltype], 



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
