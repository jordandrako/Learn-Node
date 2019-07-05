const fs = require('fs');

// inserting an SVG
module.exports = name => fs.readFileSync(`./public/images/icons/${name}.svg`);
