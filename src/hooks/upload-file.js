
module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    const { params , data } = context;

    data.images_of_name = params.files.map((item) => {
      return {
        name: item.filename,
        size: item.size,
        url: "/uploads/" + item.filename,
      };
    });
    return context;
  };
};
