/**
 * config in debug mode
 * @type {Object}
 */
let config = {
  auto_reload: true,
  auto_reload_except: ['/node_modules/', '/lib/core/think.js']
}

if (think.mode === 'cli') {
  config.auto_reload = false;
}

module.exports = config;