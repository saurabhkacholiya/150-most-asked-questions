// TC -> O(1) as (9^2) is constant
// SC -> O(1) as (9^2) at most value we will add the values
// pattern is ??

// why math.floor always rounds down:
// Math.round(0/3) -> 0
// Math.round(1/3) -> 0
// Math.round(2/3) -> 1

// if you see the 2/3 will give 1 in math.round that will make the box in center
// but the 2/3 is in the 1st box thats why math.floor which will take the lowest value

function isValidSudoku(board) {
  const set = new Set();
  for (let column = 0; column < 9; column++) {
    for (let row = 0; row < 9; row++) {
      const boardValue = board[column][row];
      const currRowValue = `${boardValue}-value-at-row-${row}`;
      const currColValue = `${boardValue}-value-at-col-${column}`;
      const currSquareValue = `${boardValue}-value-at-row-${Math.floor(
        row / 3
      )}-${Math.floor(column / 3)}}`;

      if (boardValue === ".") {
        continue;
      }

      if (
        set.has(currRowValue) ||
        set.has(currColValue) ||
        set.has(currSquareValue)
      ) {
        return false;
      } else {
        set.add(currRowValue);
        set.add(currColValue);
        set.add(currSquareValue);
      }
    }
  }
  return true;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
