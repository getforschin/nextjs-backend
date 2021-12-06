const populate = require("feathers-populate-hook");
const { fastJoin } = require("feathers-hooks-common");

module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    const { app } = context;

    let data = context.result.data;
    data = data[0];

    const photoCollectionService = app.service("photos-collection");
    await Promise.all(
      data.client.map(async (item) => {
        let _data = await photoCollectionService.get(item.photo);
        item.image = _data;

        return item;
      })
    ).then((result) => {
      data.client = result;
    });

    return context;
  };
};
