const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");
const mongoose = require("mongoose");

function MessageRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Message;
}

MessageRepository.prototype = new Repository();

MessageRepository.prototype.create = create;
MessageRepository.prototype.getAllreceivers = getAllreceivers;


function create(data) {
    const user = new Message(data);
    return user.save();
}

function getAllreceivers(id) {
    var model = this.model;
    return model.aggregate([
        {$match: {senderId: mongoose.Types.ObjectId(id)}},
        {$group: {_id: "$receiverId"}},
        { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "friend" }},
        {$project: {_id: 0}}
    ]);
}

module.exports = new MessageRepository();
