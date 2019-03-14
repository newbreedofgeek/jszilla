const composeTwo = (first, next) => (val) => {
  return next(first(val));
}

export function compose() {
  const args = [...arguments];
  const len = args.length;

  // if someone is composing nothing or just 1 func, deal with it here
  if (!args || len === 0) {
    return (val) => (val);
  } 

  if (len === 1) {
    return args[0];
  }

  // recurse and merge-compose 2 funcs at a time
  const [first, next, ...other] = args;

  if (len === 2) {
    return composeTwo(first, next);
  }

  if (len > 2) {
    return compose(composeTwo(first, next), ...other)
  }
}

