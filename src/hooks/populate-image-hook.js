const populate = require("feathers-populate-hook");
const { fastJoin } = require("feathers-hooks-common");

module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
     const {  app } = context;
    // console.log(data)
    // data.client = data.client.map(item => {
    //   app.service('photos-collection').get(item.photo).then(res => console.log(res))
    //   return item
    // })

    let data = context.result.data
    data = data[0]
   
    const photoCollectionService = app.service('photos-collection')

    // console.log(data)

    // data.map(item => {
    //   item.
    // })
    //  const clientArray = data.client.map(item => item.photo)


    

    //  data.clientArray = await photoCollectionService.find({
    //    query : {_id : {$in : clientArray}},
    //    paginate : false
    //  })

    //  console.log(data.clientArray)

      await Promise.all(data.client.map(async item => {
         let _data = await photoCollectionService.get(item.photo)
         item.image = _data
         
         return item
     })).then(result => {
       data.client = result
     })
     //console.log(data.client)

      //console.log(clientArray)
     //data.clientArray = clientArray
    // console.log(clientArray)
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
