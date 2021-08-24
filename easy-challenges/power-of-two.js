//Power of Two
//Given an integer n, return true if it is a power of two. Otherwise, return false.
//An integer n is a power of two, if there exists an integer x such that n == 2^x.

function isPowerOfTwo(n){
  if (n <= 0){
    return false;
  }

  let num = n;

  while(num >= 1){
    if(num % 2 === 0){
      num = num /2;
    } else if(num === 1){
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPowerOfTwo(-16));