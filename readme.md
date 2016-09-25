# svg-path-prettify

Prettifies a SVG path by adding spaces between commands.

## Install

```shell
npm install svg-path-prettify --save
```

## Result

```javascript
'M1051 0l-113 158h-673l-113 -158h-138l507 710h161l510 -710h-141zM342 267h518l-259 362z'
```

Is turned into:

```javascript
'M 1051 0 l -113 158 h -673 l -113 -158 h -138 l 507 710 h 161 l 510 -710 h -141 z M 342 267 h 518 l -259 362 z'
```

## Use

Required as a module:

```javascript
const svgPathPrettify = require('svg-path-prettify');
let svgPath = 'M1051 0l-113 158h-673l-113 -158h-138l507 710h161l510 -710h-141zM342 267h518l-259 362z';
svgPathPrettify(svgPath);
```

Loaded as a script:

```html
<script src="/node_modules/svg-path-prettify/svg-path-prettify.min.js"></script>
<script type="text/javascript">
  var svgPath = 'M1051 0l-113 158h-673l-113 -158h-138l507 710h161l510 -710h-141zM342 267h518l-259 362z';
  svgPathPrettify(svgPath);
</script>
```
