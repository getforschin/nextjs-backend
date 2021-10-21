var fs = require("fs");
module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    const {result } = context
    console.log("Context result ->> " ,result)

    fs.unlink("public/uploads/" + result.file_name, (err) => {
      if (err) throw err;
    });

    return context;
  };
};
