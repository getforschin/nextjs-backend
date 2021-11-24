const populate = require("feathers-populate-hook");
const { fastJoin } = require("feathers-hooks-common");

module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    // const { params , data , app } = context;
    // console.log(data)
    // data.client = data.client.map(item => {
    //   app.service('photos-collection').get(item.photo).then(res => console.log(res))
    //   return item
    // })

    const {app , data} = context
    const photoCollectionService = app.service('photos-collection')

    const clientArray = data.client.map(item => item.photo)
    console.log(clientArray)
    // fastJoin({
    //   joins : {
    //     images : () => async detail => detail.client = await photoCollectionService.find({
    //       query : {_id : { $in : clientArray}},
    //       paginate : false
    //     })
    //   }
    // })
    
    // const {app , data} = context
    // const photoCollectionService = app.service('photos-collection')

    // let photo_id = photoCollectionService.

    // data.client = photoCollectionService.find({
    //   query :
    // }).then(res => {
    //   res["image"] = res.
    // })

    return context;
  };
};
