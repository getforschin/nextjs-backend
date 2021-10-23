// Initializes the `photos-collection` service on path `/photos-collection`
const { PhotosCollection } = require("./photos-collection.class");
const createModel = require("../../models/photos-collection.model");
const hooks = require("./photos-collection.hooks");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, "public/uploads"), // where the files are being stored
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`), // getting the file name
});
const upload = multer({
  storage,
  limits: {
    fieldSize: 1e8, // Max field value size in bytes, here it's 100MB
    fileSize: 1e7, //  The max file size in bytes, here it's 10MB
  },
});

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  let photosCollection = new PhotosCollection(options, app);

  // Initialize our service with any options it requires
  app.use(
    "/photos-collection",
    upload.single("attachment"),
    function (req, res, next) {
      const { method } = req;
      //console.log(req)
      if (method === "POST" || method === "PATCH") {
       
        req.feathers.file = req.file; // transfer the received files to feathers
      }
      next();
    },
    photosCollection
  );
  // Get our initialized service so that we can register hooks
  const service = app.service("photos-collection");

  service.hooks(hooks);
};
