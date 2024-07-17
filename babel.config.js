module.exports = function (api) {
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"];

  const plugins = api.env("development")
    ? [require.resolve('react-refresh/babel')]
    : []

  return {
    presets,
    plugins
  };
}
