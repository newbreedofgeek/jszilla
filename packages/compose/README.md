# @jszilla/compose
Send in a `n` number of functions to chain/pipe a value through. This `function composition` pattern is used in many `middleware` based libraries like express.js and redux.

e.g:
```
const composed = compose(toUpperCase, strongify, pad, endSmile, startSmile);
const applyAllToStr = composed('foobar');

console.log(applyAllToStr); // returns :) ----------<strong>FOOBAR</strong>---------- :)
```
** see index.js for implementations of toUpperCase, strongify ... startSmile
