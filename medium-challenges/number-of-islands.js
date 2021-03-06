//200. Number of Islands
//Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//Youtube tutorial: https://www.youtube.com/watch?v=cFnUDdi6DeE&ab_channel=TerribleWhiteboard
//Tutorial on DFS in 2D arrays: https://www.youtube.com/watch?v=LVlihRYfVVw&ab_channel=MattYang-AlgorithmsPrep%26More

//Going to loop through the grid (nested for loops to iterate over each entry)
//Checking for a 1
//If we find it, change to 0 to mark we've visited it, and recursively check its neighbors until there are no more 1's


function numIslands(grid){
  let countOfIslands = 0;
  
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      let currentCell = grid[i][j];
      if(currentCell === '1'){
        dfsCell(grid, i, j);
        countOfIslands++;
      }
    }
  }
  return countOfIslands;
}

//helper function for dfs on a cell in grid
const dfsCell = (grid, i, j) => {
  //check necessary conditions
  if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0'){
    return;
  }
  //process cell
  grid[i][j] = '0';

  //call dfs as needed
  dfsCell(grid, i+1, j);
  dfsCell(grid, i-1, j);
  dfsCell(grid, i, j+1);
  dfsCell(grid, i, j-1);
};

console.log(numIslands([
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0'],
]));

console.log(numIslands([
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1'],
]));


// function numIslands(grid){

//   const getIslandCount = (grid, i, j) => {
//     if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0'){
//       return 0;
//     }
  
//     grid[i][j] = '0';
  
//     getIslandCount(grid, i+1, j);
//     getIslandCount(grid, i-1, j);
//     getIslandCount(grid, i, j+1);
//     getIslandCount(grid, i, j-1);
  
//     return 1;
//   };

//   if(grid === null || grid.length === 0){
//     return 0;
//   }

//   let numberOfIslands = 0;

//   for(let i = 0; i < grid.length; i++){
//     for(let j = 0; j < grid[i].length; j++){
//       let currentNum = grid[i][j];
//       if(currentNum === '1'){
//         numberOfIslands += getIslandCount(grid, i, j);
//       }
//     }
//   }
//   return numberOfIslands;
// }