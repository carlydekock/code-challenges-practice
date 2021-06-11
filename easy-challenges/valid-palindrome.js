//Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//Example => Input: s= "A man, a plan, a canal: Panama", Output: True, Explanation: "amanaplanacanalpanama" is a palindrome.

function isPalindrome(s){
  let newString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0;
  let j = newString.length - 1;
  while(i < j){
    if(newString.charAt(i) === newString.charAt(j)){
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
