const UserRepository = require("../repositories/UserRepository");
const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  findAll: () => {
    return UserRepository.getAll();
  },
  findOne: id => {
    return UserRepository.getById(id);
  },
  createUser: newData => {
      return UserRepository.create(newData);
  },

  deleteUser: id => {
      return UserRepository.deleteById(id);
  },
  updateUser: (id, data) => {
      return UserRepository.updateById(id, data);
  },
  getAllReceivers: (id) => {
      return  UserRepository.getAllreceivers(id);
  }

};
