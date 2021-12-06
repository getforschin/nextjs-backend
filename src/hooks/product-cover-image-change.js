
module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    const { app  , result} = context;

    let {cover} = result;
   

    const photoCollectionService = app.service("photos-collection");
    await Promise.all(
        cover.map(async (item) => {
          
        return _data = await photoCollectionService.get(item);
        

        
      })
    ).then((res) => {
        console.log(result)
      result.cover_image = res;
    });

    return context;
  };
};
