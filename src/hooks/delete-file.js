var fs = require('fs');
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
      //console.log(context.params)

      context.params.images_of_name.map(item => {
        fs.unlink("public/uploads/"+item.filename, (err) => {
          if (err) throw err;
        });
      })
      return context;
    }
}