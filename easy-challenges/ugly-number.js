//Ugly Number
//An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
//Given an integer n, return true if n is an ugly number.
//Example- Input: n=6, output=true (6 = 2 * 3)
//Example- Input: n=14, output=false (includes prime factor 7)

function isUgly(n){
  let num = n;
  if(num < 1) return false;
  while(num > 1){
    if(num % 2 === 0){
      num = num / 2;
    } else if(num % 3 === 0){
      num = num / 3;
    } else if(num % 5 === 0){
      num = num / 5;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isUgly(8));
console.log(isUgly(14));