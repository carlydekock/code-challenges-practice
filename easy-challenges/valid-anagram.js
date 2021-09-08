//Valid Anagram
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s, t){
  if(s.length !== t.length){
    return false;
  }

  let countS = {};
  let countT = {};

  for(let i = 0; i < s.length; i++){
    let currentLetter = s[i];
    countS[currentLetter] = (countS[currentLetter] || 0) + 1;
  }

  for(let j = 0; j < t.length; j++){
    let currentLetter = t[j];
    countT[currentLetter] = (countT[currentLetter] || 0) + 1;
  }

  for(let key in countS){
    if(countS[key] !== countT[key]){
      return false;
    }
  }

  return true;
}

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));

//Summary: Set up two maps or objects to track a count of the letters in each string. Iterate through each string letter by letter, add it to the object or update the count at that key. The letters will be the key, and the value will be the count of times the letter is present. Do this for each string, and then compare the two values at each key. If the values don't match for the same key, then it is not an anagram as there are not the same letters in each string.
//Pattern: Hash map/object to store count of letters, then iterate over the keys/values to check if they match in each map/object or not.
//Big O: O(n) time, where n is the sum of all letters in s and t. Iterating over all the letters in strings s and t. Space O(n) as well, storing map/object with each letter as key.