'use strict';

function svgPathPrettify(path) {
  for (let l = 0; l < path.length; l += 1 ) {
    if (!parseInt(path[l]) && checkIfPunc(path[l]) && path[l] !== '0') {
      if (path[l - 1] !== ' ' && l !== 0 ) {
        path = path.substring(0, l) + ' ' + path.substring(l);
        l += 1;
      }
      if (path[l + 1] !== ' ' && l !== path.length - 1) {
        path = path.substring(0, l + 1) + ' ' + path.substring(l + 1);
      }
    }
  }
  return path;
}

function checkIfPunc(char) {
  return char !== ' ' && char !== '-' && char !== '.' && char !== '\n'
    ? true
    : false;
}

module.exports = svgPathPrettify;
