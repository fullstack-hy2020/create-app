class ApplicationError extends Error {
  constructor(message, status, extra) {
    super()

    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name

    this.message = message || 'Something went wrong. Please try again.'

    this.status = status || 500

    this.extra = extra || {}
  }
}

module.exports = {
  ApplicationError,
}
