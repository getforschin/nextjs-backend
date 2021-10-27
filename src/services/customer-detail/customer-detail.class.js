const { Service } = require("feathers-mongoose");

exports.CustomerDetail = class CustomerDetail extends (
  Service
) {
  setup(app) {
    app.service("customer-detail").find().then((res) => {
      if(res.data.length < 1) {
        app.service("customer-detail").create({
          about_us : [{text : "about us"} , {text : "statement"}],
          manufacturing_process : [{text : "manufacturing process" }, {text :  "process of manufacturing"}],
          research_development : [{text : "research"} ,{text : "development" }],
          phone_number : '989595955',
          name_of_company: 'Company Name',
          fax_number : '02120-2121',
          email_id : 'emaild@id.com',
          factory_detail : [{text : 'factory detail' } , {text : 'is here'}]

        }).then
      }
    });
  }
};
