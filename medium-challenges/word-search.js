//Word Search
//Given an m x n grid of characters board and a string word, return true if word exists in the grid.
//The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
//Example - Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED", Output: true
//Youtube tutorial: https://www.youtube.com/watch?v=vYYNp0Jrdv0&ab_channel=KevinNaughtonJr.

function exist(board, word){

  //helper function for depthfirstsearch from current letter
  const dFSearch = (board, row, column, count, word) => {
    if(count === word.length){
      return true;
    }
    if(row < 0 || row >= board.length || column < 0 || column >= board[row].length || board[row][column] !== word.charAt(count)){
      return false;
    }
    //remember the value of the cell
    let temp = board[row][column];
    //marking this cell as "used" so that same letter cell can't be used more than once
    board[row][column] = '';
    let found = dFSearch(board, row + 1, column, count + 1, word) //searching down one row
      || dFSearch(board, row - 1, column, count + 1, word) //searching up one row 
      || dFSearch(board, row, column + 1, count + 1, word) //searching over one column
      || dFSearch(board, row, column - 1, count + 1, word); //searching back one column
    
    board[row][column] = temp;
    return found;
  };


  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      let currentLetter = board[i][j];
      if(currentLetter === word.charAt(0) && dFSearch(board, i, j, 0, word)){
        return true;
      }
    }
  }
  return false;
}

console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCCED'));
console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'SEE'));
console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCB'));