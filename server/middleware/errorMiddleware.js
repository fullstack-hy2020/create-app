const errorHandler = (error, req, res, next) => {
  console.error(error.message, error.name, error.extra)// eslint-disable-line no-console

  if (error.name === 'ApplicationError') {
    return res.status(error.status).send({ error: error.message })
  }

  res.status(500).send({ error: error.message })
  return next(error)
}

module.exports = errorHandler
