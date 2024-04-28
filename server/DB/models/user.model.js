const mongoose = require('mongoose')
require('./chat.model')
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateCreate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    avatar: String ,
    chats: [{
        chat: { type: mongoose.SchemaTypes.ObjectId, required: true, ref:'chat' },
        isRead: Boolean,
        isRecieved: Boolean,
        isSent: Boolean,
        isFavorite: Boolean,
        isDraft: Boolean,
        isDeleted: Boolean,
        labels: [{name:String, color:String}]
    }]
})
const userModel = mongoose.model('user', userSchema)
module.exports = userModel