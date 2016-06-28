var webpack = require('webpack')
var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true
})

config.resolve.alias = { jquery: 'jquery/src/jquery.js' }
config.plugins.push(
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    'window.jQuery': 'jquery'
  })
)
module.exports = config

