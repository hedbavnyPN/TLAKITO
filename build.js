const fs = require('fs');
const { version } = require('./package.json');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/v\d+\.\d+\.\d+/, `v${version}`);
fs.writeFileSync('index.html', html);

console.log(`Built TLAKITO v${version}`);
