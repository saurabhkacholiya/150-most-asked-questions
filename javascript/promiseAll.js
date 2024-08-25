function promiseAll(iterable) {
  const result = [];
  if (iterable.length === 0) {
    return Promise.resolve([]);
  }
  let iterableLength = iterable.length;
  return new Promise((res, rej) => {
    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = value;
          iterableLength--;
          if (iterableLength === 0) {
            res(result);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}

const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 200);
});
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 100);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 10);
});

const value = promiseAll([p0, p1, p2]);

value
  .then((v) => console.log("v is ", v))
  .catch((err) => console.log("err ", err));
