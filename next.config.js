module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /node_modules\/@next\/swc-darwin-x64/,
      use: 'ignore-loader',
    });
    return config;
  },
};
