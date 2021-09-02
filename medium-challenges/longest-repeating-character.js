//424. Longest Repeating Character Replacement
//You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
//Return the length of the longest substring containing the same letter you can get after performing the above operations.
//Ex - Input: s = "ABAB", k = 2, Output: 4 (Replace the two 'A's with two 'B's or vice versa.)
//Ex - Input: s = "AABABBA", k = 1, Output: 4 (Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.)

//Two pointers - L and R, and an overal max count
//Keep a hash map of the count of characters in the substring
//If count of most characters - least characters <= k, then substring is valid - (up to k can be changed)
//Once becomes invalid - remove characters from the left until valid again
//Continue until R hits the end

// function longestRepeatingCharacters(s, k){
//   //two pointers and overall count
//   let left = 0;
//   let right = 0;
//   let maxCount = 0;
//   let letterCount = {};

//   while(right < s.length){
//     let currentLetter = s.charAt(right);
//     if(letterCount[currentLetter]){
//       letterCount[currentLetter]++;
//     } else {
//       letterCount[currentLetter] = 1;
//     }

//     if(letterCount[currentLetter] > maxCount){
//       maxCount = letterCount[currentLetter];
//     }

//     if((right - left + 1) - maxCount > k){
//       letterCount[s.charAt(left)]--;
//       left++;
//     }
//     right++;
//   }
//   return right - left;
// }

function longestRepeatingCharacters(s, k){
  let left = 0;
  let maxCount = 0;
  let letterCount = {};

  for(let right = 0; right < s.length; right++){
    let currentLetter = s.charAt(right);
    if(!letterCount[currentLetter]){
      letterCount[currentLetter] = 1;
    } else {
      letterCount[currentLetter]++;
    }
    let count = Object.values(letterCount);
    maxCount = Math.max(...count);
    if(((right - left + 1) - maxCount) > k){
      letterCount[s.charAt(left)]--;
      left++;
    }
    maxCount = Math.max(maxCount, (right - left + 1));
  }
  return maxCount;

}

console.log(longestRepeatingCharacters('ABAB', 2));
console.log(longestRepeatingCharacters('AABABBA', 1));
