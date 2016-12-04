const config = {};

['Windows 10', 'OS X 10.11'].forEach((platform) => {
  ['beta', '54, 53'].forEach((version) => {
    config['sl_chrome-' + platform + '-' + version] = {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform,
      version
    };
  });

  ['beta', '50, 49'].forEach((version) => {
    config['sl_chrome-' + platform + '-' + version] = {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform,
      version
    };
  });
});

['10', '9'].forEach((version) => {
  config['sl_safair-linux-' + version] = {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.11',
    version
  };
});

['45', '44'].forEach((version) => {
  config['sl_firefox-linux-' + version] = {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Linux',
    version
  };
});

config['sl_edge'] = {
  base: 'SauceLabs',
  browserName: 'MicrosoftEdge',
  platform: 'Windows 10'
};

console.log(config);
module.exports = config;