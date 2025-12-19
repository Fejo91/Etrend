module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // TÖRÖLD vagy kommenteld ki:
    // plugins: ["expo-router/babel"],
  };
};