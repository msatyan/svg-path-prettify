'use strict';

function svgPathPrettify(path) {
  for (let c = 0; c < path.length; c += 1 ) {

    if (!parseInt(path[c]) && checkIfPunc(path[c]) && path[c] !== '0') {
      if (path[c - 1] !== ' ' && c !== 0 ) {
        path = path.substring(0, c) + ' ' + path.substring(c);
        c += 1;
      }
      if (path[c + 1] !== ' ' && c !== path.length - 1) {
        path = path.substring(0, c + 1) + ' ' + path.substring(c + 1);
      }
    }

    if (path[c] == ',') {
      path = path[c - 1] !== ' ' && c !== 0 && path[c + 1] !== ' ' && c !== path.length - 1
        ? path = path.substring(0, c) + ' ' + path.substring(c + 1)
        : path = path.substring(0, c - 1) + path.substring(c + 1);
    }
  }
  return path;
}

function checkIfPunc(char) {
  return char !== ' ' && char !== '-' && char !== '.' && char !== ',' && char !== '\n'
    ? true
    : false;
}

module.exports = svgPathPrettify;
