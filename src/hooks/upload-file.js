
module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    const { params , data } = context;
    const {file} = params
    //console.log(file)
  
    data.url  = "/uploads/" + file.filename;
    data.size = file.size;
    data.file_name = file.filename

    return context;
  };
};
