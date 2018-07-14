const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
    findAll: () => {
        return MessageRepository.getAll();
    },

    findOne: id => {
        return MessageRepository.getById(id);
    },
    createMessage: newData => {
        return MessageRepository.create(newData);
    },

    deleteMessage: id => {
        return MessageRepository.deleteById(id);
    },

    updateMessage: (id, data) => {
        return MessageRepository.updateById(id, data);
    },
    getAllReceivers: (id) => {
        return  MessageRepository.getAllreceivers(id);
    }

};
