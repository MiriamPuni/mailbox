const mongoose = require('mongoose')
require('./user.model')
const msgSchema = new mongoose.Schema({
    from:{type:mongoose.SchemaTypes.ObjectId},
    content:{type:String, required:true},
    date:{type:Date, default: Date.now}
})
const chatSchema = new mongoose.Schema({
    msg:[msgSchema],
    members:[{type:mongoose.SchemaTypes.ObjectId, ref:'user'}],
    subject:{type:String, required:true},
    lastDate:{type:Date, default: Date.now}
})

const chatModel = mongoose.model('chat', chatSchema)
module.exports = chatModel