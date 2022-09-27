module.exports = function (api) {
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"];

  const plugins = api.env("development")
    ? [require.resolve('react-refresh/babel')]
    : []

  console.log(`Babel development mode is ${api.env("development")}. plugins: ${plugins}`)
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
  return {
    presets,
    plugins
  };
}
