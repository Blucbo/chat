function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.deleteById = deleteById;
Repository.prototype.updateById = updateById;
function getAll() {
  var model = this.model;
  return model.find();
}

function getById(id) {
  var model = this.model;
  return model.findOne({
    _id: id
  });
}

function deleteById(id) {
  var model = this.model;
  return model.findOne({_id: id}).remove();
}


function updateById(id, data) {
    var model = this.model;
    return model.findOneAndUpdate(id, data);
}


module.exports = Repository;
