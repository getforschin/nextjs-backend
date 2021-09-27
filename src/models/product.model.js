// product-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'product';
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
    name: {
      type: String,
      required: true
    },
    description : {
      type : String
    },
    scope_of_supply : {
      type : String
    },
    inspection_test_certificate  : {
      type : String
    },
    model : [{
      name : {
        type :String
      }
    }],
    tabular_data : [
      {
        name : {
          type : String
        },
        row_heading : [{
          name : {
            type : String
          },
          unit : {
            type : String , 
            default : "NA"
          }
        }],
        data_in_table : [{
          name_of_model : {
            type : String
          },
          row_heading_name : {
            type : String
          },
          data_in_cell : {
            type :String
          }
        }]
        
      }
    ],
    cover : [urltype], // donate all pic




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
