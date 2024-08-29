function helper(args, result) {
  args.forEach((item) => {
    if (Array.isArray(item)) {
      result = helper(item, result);
    } else if (typeof item === "object") {
      for (const key in item) {
        console.log("key ", key);
        console.log("item ", item);
        console.log(item[key]);
        if (item[key]) {
          result += `${key} `;
        }
      }
    } else if (item) {
      result += `${item} `;
    }
  });
  return result;
}

export default function classNames(...args) {
  let result = "";
  return helper(args, result);
}

const value1 = classNames({ baz: null });

console.log("value is ", value1);
