const p0 = Promise.reject(42);
const p1 = Promise.resolve(2);

function promiseRaceWithAsync(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) return;

    iterable.forEach(async (item) => {
      try {
        const value = await item;
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  });
}

function promiseRaceWithThen(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) return;
    iterable.forEach((item) => {
      Promise.resolve(item).then(resolve, reject);
    });
  });
}

promiseRaceWithThen([p0, p1])
  .then((item) => console.log("item ", item))
  .catch((err) => console.log("err is", err));
