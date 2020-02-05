const express = require('express')
const msg = require('./controllers/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(`/Users/phineas/DevMtn/week-04/node-2-afternoon/server/../public/build`))
// app.use(express.static(__dirname + '/../public/build'))

console.log(__dirname)

app.post('/api/messages', msg.create)
app.get('/api/messages', msg.read)
app.put('/api/messages/:id', msg.update)
app.delete('/api/messages/:id', msg.delete)

const port = 3001

app.listen(port, () => {
    console.log(`the app is running on port ${port}`)
})