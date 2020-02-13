const { ApplicationError } = require('@util/customErrors')

/**
 * Simple example for backend
 */
let messages = []
let simpleId = 0

const getAll = async (req, res) => {
  res.send(messages)
}

const create = async (req, res) => {
  simpleId += 1
  const { message } = req.body
  if (!message) throw new ApplicationError('Message is required', 400)

  const newMessage = {
    id: simpleId,
    body: message,
  }
  messages.push(newMessage)
  res.send(newMessage)
}

const destroy = async (req, res) => {
  messages = messages.filter((message) => Number(message.id) !== Number(req.params.id))
  res.sendStatus(200)
}

module.exports = {
  getAll,
  create,
  destroy,
}
