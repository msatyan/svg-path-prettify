'use strict';

function prettifyPath(path) {
  for (let l = 0; l < path.length; l += 1 ) {
    // If a letter
    if (!parseInt(path[l]) && checkIfPunc(path[l]) && path[l] !== '0') {
      // BEFORE: If no space before (don't add space before if first)
      if (path[l - 1] !== ' ' && l !== 0 ) {
        path = path.substring(0, l) + ' ' + path.substring(l);
        l += 1; // Increase counter for after check
      }
      // AFTER: If no space after (don't add space after if last)
      if (path[l + 1] !== ' ' && l !== path.length - 1) path = path.substring(0, l + 1) + ' ' + path.substring(l + 1);
    }
  }
  return path;
}

function checkIfPunc(char) {
  return char !== ' ' && char !== '-' && char !== '.' && char !== '\n'
    ? true
    : false;
}

module.exports = prettifyPath;
