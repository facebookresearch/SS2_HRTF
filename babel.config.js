module.exports = function (api) {
  //api.cache(true);

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
