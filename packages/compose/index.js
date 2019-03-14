import { compose } from './main';

function toUpperCase(val) {
  return val.toUpperCase();
}

function strongify(val) {
  return `<strong>${val}</strong>`
}

function pad(val) {
  return `----------${val}----------`;
}

function endSmile(val) {
  return `${val} :)`;
}

function startSmile(val) {
  return `:) ${val}`;
}

const composed = compose(toUpperCase, strongify, pad, endSmile, startSmile);
const applyAllToStr = composed('foobar');
console.log(applyAllToStr);