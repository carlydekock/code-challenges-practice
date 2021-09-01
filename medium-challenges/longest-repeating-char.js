//3. Longest Substring Without Repeating Characters
//Given a string s, find the length of the longest substring without repeating characters.
//Ex - Input: s = "abcabcbb", Output: 3 ('abc' is the longest substring)
//Ex - Input: s = "bbbb", Output: 1 ('b' is the longest substring)
//Ex - Input: s = "pwwkew", Output: 3 ('wke' is the longest substring)

function lengthOfLongestSubstring(s){
  if(s.length <= 1){
    return s.length;
  }

  let maxLength = 0;
  let left = 0;
  let right = 0;
  let letterSet = new Set();

  while(right < s.length){
    let leftLetter = s.charAt(left);
    let rightLetter = s.charAt(right);
    if(!letterSet.has(rightLetter)){
      letterSet.add(rightLetter);
      maxLength = Math.max(maxLength, letterSet.size);
      right++;
    } else {
      letterSet.delete(leftLetter);
      left++;
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('a'));