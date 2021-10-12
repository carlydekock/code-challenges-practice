//509. Fibonacci Number
//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is:
//F(0) = 0, F(1) = 1
//F(n) = F(n - 1) + F(n - 2), for n > 1.
//Given n, calculate F(n).

function fib(n){
  if(n < 1){
    return 0;
  }
  if(n === 1){
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

console.log(fib(4));

//Summary: To calculate F(n), we need to add up F(n-1) + F(n-2). This is a perfect example of recursion, with base cases when we get to n=1 and n < 1. We'll return 1 if n===1 and return 0 if n < 0 as that is how the sequence starts [0,1]. We'll return recursive call of fib(n-1) + fib(n-2). This will build up the stack until we hit the base cases, our values of 0 and 1, and will start adding up from there to reach our answer.
//Pattern: Recursion, 2 base cases for initial starter values of F(0) and F(1).