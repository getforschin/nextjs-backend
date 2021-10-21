const { authenticate } = require('@feathersjs/authentication').hooks;
const uploadFile = require("../../hooks/upload-file");
const deleteFileOnError = require("../../hooks/delete-file-on-error");
const deleteFile = require("../../hooks/delete-file");


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [uploadFile()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [deleteFile()]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [deleteFileOnError()],
    update: [],
    patch: [],
    remove: []
  }
};
