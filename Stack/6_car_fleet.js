// leetCode https://leetcode.com/problems/car-fleet/

var carFleet = function (target, position, speed) {
  const cars = [];

  for (let i = 0; i < position.length; i++) {
    const timeTaken = (target - position[i]) / speed[i];
    cars.push([position[i], speed[i], timeTaken]);
  }

  cars.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let nextFastestCar = 0;

  for (let i = cars.length - 1; i >= 0; i--) {
    if (cars[i][2] <= nextFastestCar) continue;
    count += 1;
    nextFastestCar = cars[i][2];
  }

  return count;
};
