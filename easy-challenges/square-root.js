//Given a non-negative integer x, compute and return the square root of x.
//Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
//Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

function mySqrt(x) {

  if(x <= 1){
    return x;
  }
  let start = 1;
  let end = x/2;
  while(start <= end){
    let mid = Math.floor((start + end) / 2);
    if((mid * mid) <= x && ((mid + 1) * (mid + 1) > x)){
      return mid;
    } else if (mid * mid > x){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

}

console.log(mySqrt(9));