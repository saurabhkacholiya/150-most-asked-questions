function updateTheKey(objectKey) {
  const arr = objectKey.split("_");
  let str1 = arr[0].slice(0, 1).toLowerCase();
  let str2 = arr[0].slice(1);
  let str = `${str1}${str2}`;

  for (let i = 1; i < arr.length; i++) {
    const firstLetter = arr[i].slice(0, 1);
    const restLetter = arr[i].slice(1);
    str += `${firstLetter.toUpperCase()}${restLetter}`;
  }
  return str;
}

function camelCaseKeys(object, newObj = {}) {
  if (Array.isArray(object)) {
    const newArr = object.map((item) => {
      for (const key in item) {
        const newKey = updateTheKey(key);
        return {
          [newKey]: item[key],
        };
      }
    });
    return newArr;
  }

  for (const key in object) {
    if (typeof object[key] === "object") {
      const updatedKey = updateTheKey(key);
      newObj[updatedKey] = {};
      newObj[updatedKey] = camelCaseKeys(object[key], newObj[updatedKey]);
    } else {
      const updatedKey = updateTheKey(key);
      newObj[updatedKey] = object[key];
    }
  }

  return newObj;
}

// const value = camelCaseKeys({ foo_bar: true, bar_baz: { baz_quz: "1" } });
// const value = camelCaseKeys([{ baz_qux: true }, { foo: true }]);
const value = camelCaseKeys({
  foo_bar: true,
  Boo_Bar: false,
  bar_baz: [{ baz_qux: true }, { foo: true }],
});

console.log("value is", value);

// {
//     barBaz: [
//       {
//         bazQux: true,
//       },
//       {
//         foo: true,
//       },
//     ],
//     booBar: false,
//     fooBar: true,
//   });
// }
