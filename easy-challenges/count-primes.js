//Count Primes
//Count the number of prime numbers less than a non-negative number, n.

function countPrimes(n){
  let nums = [];
  let primeCount = 0;
  
  for(let i = 0; i < n; i++){
    nums[i] = true;
  }

  for(let j = 2; j * j < n; j++){
    if(nums[j] === true){
      for(let k = 2; k * j < n; k++){
        nums[k * j] = false;
      }
    }
  }

  for(let i = 2; i < n; i++){
    if(nums[i] === true){
      primeCount++;
    }
  }

  return primeCount;
}

console.log(countPrimes(10));
