//Given a pattern and a string s, find if s follows the same pattern.
//Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
//Example- Input: pattern = "abba", s = "dog cat cat dog", Output: true


function wordPattern(pattern, s){
  let charToWord = {};
  let wordToChar = {};

  let str = s.split(' ');
  let patternChar = pattern.split('');
  
  if(str.length !== patternChar.length){
    return false;
  }

  for(let i = 0; i < str.length; i++){
    let currentWord = str[i];
    let currentLetter = patternChar[i];

    if(!charToWord[currentLetter]){
      charToWord[currentLetter] = currentWord;
    } else if(charToWord[currentLetter] !== currentWord){
      return false;
    }

    if(!wordToChar[currentWord]){
      wordToChar[currentWord] = currentLetter;
    } else if(wordToChar[currentWord] !== currentLetter){
      return false;
    }
  }

  return true;
}

// console.log(wordPattern('abba', 'dog cat cat dog'));