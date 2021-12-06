var fs = require("fs");
module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    const { result } = context
    const { tabular_data} = result

    let modelSet = new Set();
    let specificationSet = new Set()


    tabular_data.map(item => {
        modelSet.add(item.model)
        specificationSet.add(item.specification)
    })
    result["tableColumn"] = []
    result["tableColumn"].push({
        key : "name",
        title : "Specification/Model Name",
        dataIndex : "name"
    })

    result["tableColumn"] =[...result["tableColumn"] , ...[...modelSet].map( item => {
        let _item ={}
        _item["key"] = item,
        _item["title"] = item,
        _item["dataIndex"] = item
        return _item
    })]

  


// key: '1',
// name: 'Mike',
// age: 32,
// address: '10 Downing Street


    result["tableData"] = [...specificationSet].map(spec => {
        let _item = {}
        _item["key"] = spec;
        _item["name"] = spec;
        [...modelSet].map(model => {

            let _TabulardataObj = tabular_data.find(_data => 
                _data["specification"]== spec && _data.model == model)
            _item[model] = _TabulardataObj["value"] + " " + _TabulardataObj["unit"]
        })
        return _item

    })
   
   
    
   
    return context;
  };
};
