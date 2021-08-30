//Valid Perfect Square
//Given a positive integer num, write a function which returns True if num is a perfect square else False.
//Ex: Input: num = 16, Output: true
//Ex: Input: num = 14, Output: false


function isPerfectSquare(num){
  let squareRoot = Math.sqrt(num);
  let result = Number.isInteger(squareRoot);
  return result;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));