const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
	senderId : {
		type : String,
		required : true
	},
	senderUsername : {
		type : String,
		required : true
	},
	receiverId : {
		type : String,
		required : true
	},
	receiverUsername : {
		type : String,
		required : true
	},
	message : {
		type : String,
		required : true
	},
	img : {
		type : String
	},
	sharedId : String,
    sharedUsername : String,
    sharedMessage : String,
    shareImg : {
        type : String,
    },
},{timestamps : true})

module.exports = mongoose.model("Message", MessageSchema) 