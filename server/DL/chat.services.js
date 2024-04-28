const userController = require('../DB/controllers/user.controller')
const chatController = require('../DB/controllers/chat.controller')
const { Flags } = require('../utility')

async function getChatWithFilters(userId, flag) {
    if (!Flags[flag]) throw 'the flag not exits'
    let user = await userController.readByFlags(userId, [Flags[flag]], { chats: true, members: true })
    return user.chats
}

async function getChatWithLabels(userId, nameLabel) {
    let user = userController.readByLabels(userId, nameLabel)
    return user
}

async function updateStatusChat(userId, chatId, flag) {
    let user = await userController.readOne({ _id: userId })
    let chat = user.chats.find(c => c._id == chatId)
    chat[flag] = !chat[flag]
    userController.save(user)
    return chat
}

async function addLabel(userId, chatId, label) {
    let user = await userController.readOne({ _id: userId })
    let chat = user.chats.find(c => c.chat == chatId)
    if (chat.labels.find(l => l.name == label.name)) throw 'the label exist'
    if (user.chats.find(c => c.labels.find(l => l.color == label.color))) throw 'the color exist'
    chat.labels.push(label)
    userController.save(user)
    return chat
}

async function getListLabels(userId) {
    let listLabels = []
    let user = await userController.readOne({ _id: userId })
    user.chats.forEach(c => c.labels.forEach(l => {
        if (!listLabels.find(n => n.name == l.name)) {
            listLabels.push(l)
        }
    }))
    return listLabels
}

async function getChat(userId, chatId) {
    let user = await userController.readOne({ _id: userId }, 'chats.chat')
    let chat = user.chats.find(c => c.chat._id == chatId)
    if (!chat) throw 'chat not exist'
    return chat
}

async function updateUserByNewMsg(userId,chatId,  members){
    members.forEach(async m => {
        if (m != userId) {
            let userGetting = await userController.readOne({ _id: m })
            userGetting.chats.find(c => c.chat == chatId).isRecieved = true
            userGetting.chats.find(c => c.chat == chatId).isRead = false
            console.log(userGetting);
            userController.save(userGetting)
        }
    })
}

async function addMsg(userId, chatId, content) {
    if (!content) throw 'content is not exist'
    let user = await userController.readOne({ _id: userId }, 'chats.chat')
    let chat = user.chats.find(c => c.chat._id == chatId).chat
    if (!chat) throw 'chat not exist'
    chat.msg.push({ from: userId, content })
    chat.lastDate = Date.now()
    chatController.save(chat)
    await updateUserByNewMsg(userId,chatId, chat.members)
    return chat
}

async function updateUserByNewChat(userId, members, chatId){
    members.forEach(async m=>{
        let user = await userController.readOne({ _id:m })
        if (!user) throw `${m} is not exist`
        let isSent, isRecieved
        if (m == userId){ isSent = true; isRecieved = false}
        else {isSent = false; isRecieved = true}
        user.chats.push({
            chat: chatId,
            isSent,
            isRecieved,
            isFavorite: false,
            isDeleted: false,
            labels:[]
        })
        await userController.save(user)
    })
}

async function emailToIdUser(arrEmail){
    let arrIds = await Promise.all(arrEmail.map(async m => {
        let user = await userController.readOne({ email: m })
        if (!user) throw `${m} is not exist`
        return user._id
    }))
    return arrIds
}

async function createNewChat(userId, data) {
    if (!data.subject) throw 'subject is not exist'
    if (!data.contentFirstMsg) throw 'contentFirstMsg is not exist'
    if (data.members.length < 1) throw 'members is not exist'
    let members = await emailToIdUser(data.members)
    members.push(userId)
    let newChat = {
        msg: [{ from: userId, content: data.contentFirstMsg }],
        members,
        subject: data.subject
    }
    newChat = await chatController.create(newChat)
    await updateUserByNewChat(userId, members, newChat._id)
    return newChat
}

async function getNumMesNewPerFlag(){
    let user = await userController.read()
    return 'luli'
}

module.exports = {
    getChatWithFilters,
    getChatWithLabels,
    updateStatusChat,
    addLabel,
    getListLabels,
    getChat,
    addMsg,
    createNewChat,
    getNumMesNewPerFlag
}