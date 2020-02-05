let messages = []

let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const {text} = req.body
        let id = req.params.id
        let find = messages.findIndex(message => message.id === +id)
        messages[find] = {
            text: text || messages[find].text,
            id: messages[find].id,
            time: messages[find].time
        }
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        let id = req.params.id
        let find = messages.findIndex(message => message.id === +id)
        messages.splice(find, 1)
        res.status(200).send(messages)
    }
}