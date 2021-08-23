//Happy Number
//Write an algorithm to determine if a number n is happy.
//A happy number is a number defined by the following process:
  //Starting with any positive integer, replace the number by the sum of the squares of its digits.
  //Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
  //Those numbers for which this process ends in 1 are happy.
//Return true if n is a happy number, and false if not.

function isHappy(n){
  let num = n;
  let counter = 0;
  
  if(num === 1){
    return true;
  }

  while(num !== 1 && counter < 20){
    let sum = 0;
    let digits = num.toString().split('').map(number => parseInt(number));
    for(let i = 0; i < digits.length; i++){
      sum = sum + Math.pow(digits[i], 2);
      num = sum;
    }
    if(sum === 1){
      console.log('inside if');
      return true;
    }
    counter ++;
    console.log(sum, counter);
  }
  if(num !== 1){
    return false;
  }
}

// console.log(isHappy(19));
// console.log(isHappy(2));
// console.log(isHappy(1));