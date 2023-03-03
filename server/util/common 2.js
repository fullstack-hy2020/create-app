const common = require('@root/config/common')

const PORT = process.env.PORT || 8000

module.exports = {
  ...common,
  PORT,
}
