//392. Is Subsequence
//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

//Initial ideas: two pointers
//while loop -> while haven't hit the end of either string, look for matching characters

function isSubsequence(s, t){
  let pointer1 = 0;
  let pointer2 = 0;
  if(s.length === 0){
    return true;
  }
  while(pointer1 < s.length && pointer2 < t.length){
    //compare letter as s to letter at t
    let letterAtS = s.charAt(pointer1);
    let letterAtT = t.charAt(pointer2);
    //if same, increment
    if(letterAtS === letterAtT && pointer1 === (s.length-1)){
      return true;
    } else if(letterAtS === letterAtT){
      // console.log('these are the same', letterAtS, letterAtT);
      pointer1++;
      pointer2++;
    } else {
      // console.log('NOT THE SAME', letterAtS, letterAtT);
      pointer2++;
    }
    //if not, increment t

  }
  return false;
}

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));

//Summary: Using two pointers, we can traverse the characters one by one in each string. Since we know s is going to be the subsequence of t, we can run a while loop (while we haven't reached the end) checking for whether characters are the same. If not, increment pointer for t, if so, increment both. If the letters are the same and we're at the end of the s string, then return true. Else, return false.
//Pattern: Two pointers and a while loop.