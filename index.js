'use strict';

function prettifyPath(path) {
  for (let l = 0; l < path.length; l += 1 ) {
    // If a letter
    if (!parseInt(path[l]) && path[l] !== ' ' && path[l] !== '-' && path[l] !== '0' && path[l] !== '\n') {
      // If no space before
      // Don't add space before if first
      if (l !== 0 && path[l - 1] !== ' ') {
        path = path.substring(0, l) + ' ' + path.substring(l);
        l += 1; // Increase counter for next check
      }
      // If no space after
      // Don't add space after if last
      if (l !== path.length - 1 && path[l + 1] !== ' ') path = path.substring(0, l + 1) + ' ' + path.substring(l + 1);
    }
  }
  return path;
}

module.exports = prettifyPath;
