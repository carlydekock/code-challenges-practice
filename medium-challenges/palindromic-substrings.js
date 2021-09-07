//647. Palindromic Substrings
//Given a string s, return the number of palindromic substrings in it.
//A string is a palindrome when it reads the same backward as forward.
//A substring is a contiguous sequence of characters within the string.
//Ex- Input: s = "abc", Output: 3, Explanation: Three palindromic strings: "a", "b", "c".
//Ex- Input: s = "aaa", Output: 6, Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

function countSubstrings(s){
  let count = 0;

  for(let i = 0; i < s.length; i++){
    //this is for substrings of odd length, 1, 3, 5, etc (starting at size of 1 and adding to left and right simultaneously)
    let left = i;
    let right = i; // starting with left and right as same letter -> smallest palindrome is letters themselves
    //while the left and right are within bounds and the charAt(left) = charAt(right)
    while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)){
      count++;
      left--;
      right++;
    }
    //this is for substrings of even length, 2, 4, 6, etc (starting at size of 2 and adding to left and right simultaneously)
    let leftEvens = i;
    let rightEvens = i + 1; //to start with two letters
    //while the left and right are within bounds and the charAt(left) = charAt(right)
    while(leftEvens >= 0 && rightEvens < s.length && s.charAt(leftEvens) === s.charAt(rightEvens)){
      count++;
      leftEvens--;
      rightEvens++;
    }
  }
  return count;
}

console.log(countSubstrings('abc'));
console.log(countSubstrings('aaa'));

