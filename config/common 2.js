/**
 * Insert application wide common items here, they're all exported by frontend and backend common.js respectively
 */

const inProduction = process.env.NODE_ENV === 'production'

module.exports = {
  inProduction,
}
