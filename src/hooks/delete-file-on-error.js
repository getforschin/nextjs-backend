var fs = require("fs");
module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    console.log("Delete File ->> " + context.params.file.filename)

    fs.unlink("public/uploads/" + context.params.file.filename, (err) => {
      if (err) throw err;
    });

    return context;
  };
};
