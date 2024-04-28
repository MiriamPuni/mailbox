const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./db')
db.connect()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const {auth}  = require('./middlewares/auth')
app.all('*', auth)

const userRouter = require('./routes/user.routes')
app.use('/user', userRouter)

const chatRouter = require('./routes/chat.roudes')
app.use('/chat', chatRouter)


app.listen(3456, ()=>console.log('🎉listen'))