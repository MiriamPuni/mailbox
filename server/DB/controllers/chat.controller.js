const chatModel = require('../models/chat.model')

async function create(data){
    return await chatModel.create(data)
}

async function read(filter = {}){
    return await chatModel.find({...filter, isActive : true})
}

async function readOne(filter, populate){
    return await chatModel.findOne(filter).populate(populate)
}

async function update(filter, data){
    return await chatModel.updateOne(filter, data)
}

async function updateById(id, data){
    return await chatModel.updateOne({_id: id}, data )
}

async function del(id){
    return await chatModel.updateById(id, {isActive: false})
}
async function save(user){return await user.save()}


module.exports = {create, read, readOne, updateById, update, del, save}