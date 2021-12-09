//463. Island Perimeter
//You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
//Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
//The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

function islandPerimeter(grid){
  let perimeter = 0;

  for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[row].length; col++){
      if(grid[row][col] !== 0){
        if(!grid[row][col+1]) perimeter++;
        if(!grid[row][col-1]) perimeter++;
        if(!grid[row-1] || !grid[row-1][col]) perimeter++;
        if(!grid[row+1] || !grid[row+1][col]) perimeter++;
      }
    }
  }
  return perimeter;
}

// const dfs = (i, j, grid) => {
//   let perimeter = 0;
//   // const visited = new Set();
//   if(i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === 0){
//     return 1;
//   }

//   if(grid[i][j] === '#'){
//     return 0;
//   }

//   grid[i][j] = '#';
//   perimeter += dfs(i, j+1, grid);
//   perimeter += dfs(i+1, j, grid);
//   perimeter += dfs(i, j-1, grid);
//   perimeter += dfs(i-1, j, grid);
//   return perimeter;
// };


// function islandPerimeter(grid){
//   let perimeter = 0;

//   for(let i = 0; i < grid.length; i++){
//     for(let j = 0; j < grid[0].length; j++){
//       if(grid[i][j] !== 0){
//         perimeter = dfs(i, j, grid);
//       }
//     }
//   }
//   return perimeter;
// }

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));
