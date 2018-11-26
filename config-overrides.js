const { injectBabelPlugin } = require('react-app-rewired')
const PATH = require('path')

function resolve(url){
  return Path.resolve(__dirname,'src/',url)
}

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config)

    config.resolve.alias = {
      ...config.resolve.alias,
      '@' : resolve('')
    }
    return config;
  };