// Initializes the `image-configuration-data` service on path `/image-configuration-data`
const { ImageConfigurationData } = require('./image-configuration-data.class');
const createModel = require('../../models/image-configuration-data.model');
const hooks = require('./image-configuration-data.hooks');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'public/uploads'), // where the files are being stored
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`) // getting the file name
});
const upload = multer({
  storage,
  limits: {
    fieldSize: 1e+8, // Max field value size in bytes, here it's 100MB
    fileSize: 1e+7 //  The max file size in bytes, here it's 10MB
    // files: the number of files
    // READ MORE https://www.npmjs.com/package/multer#limits
  }
});


module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  let imageConfigurationData = new ImageConfigurationData(options, app);


    // Initialize our service with any options it requires
    app.use('/image-configuration-data',  upload.array('attachments'), 
    function ( req, res, next) {
     // console.log(req);
      const { method } = req;
      if (method === 'POST' || method === 'PATCH') {
       
        req.feathers.files = req.files; // transfer the received files to feathers
       
      }
      next();
    },
    imageConfigurationData);


  // Get our initialized service so that we can register hooks
  const service = app.service('image-configuration-data');

  service.hooks(hooks);
};
