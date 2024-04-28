const userModel = require('../models/user.model')

async function create(data){
    return await userModel.create(data)
}

async function read(filter = {}){
    return await userModel.find({...filter, isActive : true})
}

async function readOne(filter,populate){
    return await userModel.findOne(filter).populate(populate)
}

async function update(filter, data){
    return await userModel.updateOne(filter, data)
}

async function updateById(id, data){
    return await userModel.updateOne({_id: id}, data )
}

async function del(id){
    return await userModel.updateById(id, {isActive: false})
}
async function readByFlags(userId, flags = [], populate = {}){
    let user = await userModel.findOne({_id:userId, isActive:true})
    user.chats = user.chats.filter(c=>flags.every(f=>{
        if(typeof f === 'object'){
            let[[k, v]] = Object.entries(f)
            return c[k] == v
        }
        return c[f]
    }))
    if(populate.chats) user = await user.populate('chats.chat')
    if(populate.members) user = await user.populate({path:'chats.chat.members', select:'fullName avatar'})
    return user.toObject()
}
async function readByLabels(userId, nameLabel){
    let user = await userModel.findOne({_id:userId})
    user.chats = user.chats.filter(c=>c.labels.find(l=>l.name==nameLabel))
    user = await user.populate('chats.chat')
    return user.toObject()
}

async function save(user){return await user.save()}

module.exports = {create, read, readOne, updateById, update, del,readByLabels, readByFlags, save}