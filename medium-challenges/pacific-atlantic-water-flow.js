//417. Pacific Atlantic Water Flow
//There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
//The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
//The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
//Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
//(see link for picture description) https://leetcode.com/problems/pacific-atlantic-water-flow/

function pacificAtlantic(heights){
  if(heights.length === 0 || heights === null){
    return [];
  }

  let pacific = [];
  let atlantic = [];
  let result = [];

  //creating pacific and atlantic arrays of size equivalent to heights, will act as placeholders as we iterate through
  for(let i = 0; i < heights.length; i++){
    pacific[i] = Array(heights[0].length).fill(0);
    atlantic[i] = Array(heights[0].length).fill(0);
  }

  //top and bottom
  for(let i = 0; i < heights[0].length; i++){
    dfsCell(heights, 0, i, Number.MIN_SAFE_INTEGER, pacific);
    dfsCell(heights, heights.length - 1, i, Number.MIN_SAFE_INTEGER, atlantic);
  }

  //left and right
  for(let j = 0; j < heights.length; j++){
    dfsCell(heights, j, 0, Number.MIN_SAFE_INTEGER, pacific);
    dfsCell(heights, j, heights[0].length - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  for(let i = 0; i < heights.length; i++){
    for(let j = 0; j < heights[0].length; j++){
      if(pacific[i][j] === 1 && atlantic[i][j] === 1){
        result.push([i, j]);
      }
    }
  }
  return result;
}

const dfsCell = (heights, row, col, previousVal, ocean) => {
  //check necessary conditions
  //is it lower than where we came from
  if(row < 0 || col < 0 || row >= heights.length || col >= heights[row].length){
    return;
  } else if(heights[row][col] < previousVal){
    return;
  } else if(ocean[row][col] === 1){
    return;
  }

  //process cell
  //add it to a list of cells that can get to an ocean
  ocean[row][col] = 1;

  //call dfs as needed
  dfsCell(heights, row-1, col, heights[row][col], ocean);
  dfsCell(heights, row+1, col, heights[row][col], ocean);
  dfsCell(heights, row, col-1, heights[row][col], ocean);
  dfsCell(heights, row, col+1, heights[row][col], ocean);
};



console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]));
