//You are climbing a staircase. It takes n steps to reach the top.
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n){
  let fib = [1, 1];
  if(n > 1){
    for(let i = 2; i <= n; i++){
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  }
  return fib[fib.length - 1];
}

console.log(climbStairs(6));