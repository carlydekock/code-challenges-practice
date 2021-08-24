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