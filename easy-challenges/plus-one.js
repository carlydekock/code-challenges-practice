//Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
//You may assume the integer does not contain any leading zero, except the number 0 itself.

function plusOne(digits){
  for(let i = digits.length - 1; i >= 0; i--){
    if(digits[i] === 9){
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  return [1, ...digits];
}

console.log(plusOne([9,9]));