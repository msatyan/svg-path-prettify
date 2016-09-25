# svg-path-prettify

Prettifies an SVG path by adding spaces between commands.

## Result

```javascript
'M1051 0l-113 158h-673l-113 -158h-138l507 710h161l510 -710h-141zM342 267h518l-259 362z'
```

Is turned into:

```javascript
'M 1051 0 l -113 158 h -673 l -113 -158 h -138 l 507 710 h 161 l 510 -710 h -141 z M 342 267 h 518 l -259 362 z'
```

## Use

```javascript
const svgPrettify = require('svg-path-prettify');
const svgPath = 'M1051 0l-113 158h-673l-113 -158h-138l507 710h161l510 -710h-141zM342 267h518l-259 362z';
svgPrettify(svgPath);
```
