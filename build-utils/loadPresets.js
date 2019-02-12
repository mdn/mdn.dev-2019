const webpackMerge = require("webpack-merge");

const applyPresets = (env = { presets: [] }) => {
  let presets = env.presets || [];
  // only split if the array has more than one item
  if (presets.length) {
    presets = presets.split(",");
  }
  /** @type {string[]} */
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env)
  );

  return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
