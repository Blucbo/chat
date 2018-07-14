const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    receiverId: { type: mongoose.Schema.Types.ObjectId, required: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, required: true },
    message: { type: String, required: true}
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
