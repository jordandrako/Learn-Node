// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');
exports.dump = require('./dump');
exports.staticMap = require('./staticMap');
// Some details about the site
exports.siteName = `Now That's Delicious!`;
exports.menu = require('./menu');
exports.icon = require('./icon');
