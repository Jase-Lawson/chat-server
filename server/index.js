const express = require('express')
const app = express()
const port = 3001
const mc = require('./Controllers/messages_controller')
const messagesBaseUrl = '/api/messages'

app.use(express.json());

app.post(messagesBaseUrl, mc.createMessage);

app.get(messagesBaseUrl, mc.readMessage);

app.put(`${messagesBaseUrl}:id`, mc.updateMessage);

app.delete(`${messagesBaseUrl}:id`, mc.deleteMessage);

app.listen(port, () => console.log(`Listening on Port: ${port}`))