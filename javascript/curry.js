const mulThree = (a, b, c) => a * b * c;

function curry(func) {
  return function curries(...args) {
    if (func.length === args.length) {
      return func.apply(this, args);
    }

    return (arg) => {
      console.log("arg is ", arg);
      return arg === undefined
        ? curries.apply(this, args)
        : curries.apply(this, [...args, arg]);
    };
  };
}

const curried = curry(mulThree);

const value = curried(7)(3, 2);
console.log("value is ", value);
