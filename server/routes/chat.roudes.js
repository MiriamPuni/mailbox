const chatServices = require('../DL/chat.services')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res)=>{
    try {
        let result = await chatServices.getNumMesNewPerFlag()
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})
router.get('/flag/:flag', async (req, res)=>{
    try {
        let result = await chatServices.getChatWithFilters(req.body.user._id, req.params.flag)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

router.get('/labels/:nameLabel', async (req, res)=>{
    try {
        let result = await chatServices.getChatWithLabels(req.body.user._id, req.params.nameLabel)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

router.get('/listLabels', async (req, res)=>{
    try {
        let result = await chatServices.getListLabels(req.body.user._id)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:chatId', async (req, res)=>{
    try {
        let result = await chatServices.getChat(req.body.user._id, req.params.chatId)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

router.put('/update', async (req, res)=>{
    try {
        let result = await chatServices.updateStatusChat(req.body.user._id,req.body.chatId, req.body.flag)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

router.put('/:chatId/label', async (req, res)=>{
    try {
        let result = await chatServices.addLabel(req.body.user._id, req.params.chatId, req.body)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

router.put('/addMsg', async (req, res)=>{
    try {
        let result = await chatServices.addMsg(req.body.user._id,req.body.chatId, req.body.content)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res)=>{
    try {
        let result = await chatServices.createNewChat(req.body.user._id,req.body)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router