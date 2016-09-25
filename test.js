const path = require('path');
const svgP = require(path.join(__dirname, 'index.js'));
const svgPath = 'M1051.123 0l-113 158h-673l-113 -158h-138l507 710h161l510 -710h-141zM342 267h518l-259 362z';
console.log(svgP(svgPath));
