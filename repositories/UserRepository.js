const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const User = require("../models/user");
const mongoose = require("mongoose");

function UserRepository() {
  Repository.prototype.constructor.call(this);
  this.model = User;
}

UserRepository.prototype = new Repository();

UserRepository.prototype.create = create;
UserRepository.prototype.getAllreceivers = getAllreceivers;

function create(data) {
    const user = new User(data);
    return user.save();
}

function getAllreceivers(id) {
    var model = this.model;
    return model.aggregate([
        { $match: { _id: mongoose.Types.ObjectId("5b47dd1ba29b5e44409039f3")}},
        { $lookup: { from: "messages", localField: "_id", foreignField: "senderId", as: "senderUsers" } }
    ]);

    //
    // return model.aggregate([
    //     {
    //         $lookup: {
    //                 from: "messages",
    //                 localField: "_id",
    //                 foreignField: "senderId",
    //                 as: "senderUsers"
    //         }
    //     }
    //     ]);
// ,
//     {
//         $match: {
//             _id: id
//         }
//     }
    // return model.find({senderid: {$eq: id}});
}

module.exports = new UserRepository();
