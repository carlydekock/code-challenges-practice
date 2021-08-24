//Power of Three
//Given an integer n, return true if it is a power of three. Otherwise, return false.
//An integer n is a power of three, if there exists an integer x such that n == 3^x.

function isPowerOfThree(n){
  if(n <= 0){
    return false;
  }

  let num = n;
  while(num >= 1){
    if(num % 3 === 0){
      num = num / 3;
    } else if(num === 1){
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(45));