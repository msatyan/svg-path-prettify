const path = require('path');
const svgPath = 'M1051 0l-113,158h-673l-113.67 -158h-138l507 710h161l510,-710h-141zM342 267h518.9l-259,362z';
const startParse = process.hrtime();
console.log(require(path.join('..', 'index.js'))(svgPath));
const endParse = process.hrtime(startParse);
console.log('fontToPaths parse took ' + endParse[0] + 's, ' + (endParse[1] * 1e-6).toFixed(2) + 'ms.');
