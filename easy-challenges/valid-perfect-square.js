//Valid Perfect Square
//Given a positive integer num, write a function which returns True if num is a perfect square else False.
//Ex: Input: num = 16, Output: true
//Ex: Input: num = 14, Output: false


// function isPerfectSquare(num){
//   let squareRoot = Math.sqrt(num);
//   let result = Number.isInteger(squareRoot);
//   return result;
// }


//Not using built in methods
function isPerfectSquare(num){
  if(num < 1){
    return false;
  }
  if(num === 1){
    return true;
  }

  let left = 1;
  let right = num;

  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if((mid * mid) === num){
      return true;
    } else if((mid * mid) > num){
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));