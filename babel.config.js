module.exports = (api) => {
  api.cache(false)

  const presets = [
    ['@babel/preset-env', {
      modules: false,
    }],
    '@babel/preset-react',
  ]

  return {
    presets,
  }
}
