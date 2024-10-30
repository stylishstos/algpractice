/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islandsCount = 0;

  const marAsIsland = (grid, i, j) => {
    grid[i][j] = 'i';

    if (grid[i-1] && grid[i-1][j] === '1') {
      marAsIsland(grid, i-1, j);
    }

    if (grid[i + 1] && grid[i + 1][j] === '1') {
      marAsIsland(grid, i + 1, j);
    }

    if (grid[i][j-1] === '1') {
      marAsIsland(grid, i, j - 1);
    }

    if (grid[i][j+1] === '1') {
      marAsIsland(grid, i, j+1);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islandsCount++;
        marAsIsland(grid, i, j);
      }
    }
  }

  return islandsCount;

  console.log(islandsCount, grid);
};

const grid = [
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
]

numIslands(grid);