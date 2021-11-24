const { authenticate } = require('@feathersjs/authentication').hooks;
const uploadFile = require("../../hooks/upload-file");
const deleteFileOnError = require("../../hooks/delete-file-on-error");
const deleteFile = require("../../hooks/delete-file");


module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [authenticate('jwt') , uploadFile()],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
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
