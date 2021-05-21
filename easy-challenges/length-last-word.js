//Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
//A word is a maximal substring consisting of non-space characters only.
function lengthOfLastWord(s) {
  if(!s.length){
    return 0;
  }
  let splitWords = s.trim().split(' ');
  let last = splitWords[splitWords.length - 1];

  return last.length;
}

console.log(lengthOfLastWord('a '));
