//Palindrome Number

//Given an integer x, return true if x is palindrome integer.
//An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

function isPalindrome(x) {
  let stringified = x.toString();
  let split = stringified.split('');
  let stringLength = split.length;
  for(let i = 0; i < stringLength/2; i++){
    if(split[i] !== split[stringLength-1-i]){
      return false;
    }
  }
  return true;
}

function isPalindromeTwo(x){
  let string = x.toString();
  let split = string.split('');
  let left = 0;
  let right = split.length -1;
  while(left <= right){
    if(split[left] !== split[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome(1221));
console.log(isPalindrome(122));
console.log(isPalindrome(12233221));
console.log(isPalindrome(1000021));