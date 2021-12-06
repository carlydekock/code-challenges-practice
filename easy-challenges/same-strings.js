//1662. Check If Two String Arrays are Equivalent
//Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
//A string is represented by an array if the array elements concatenated in order forms the string.
//Ex- Input: word1 = ["ab", "c"], word2 = ["a", "bc"], Output: true
//Ex- word1 = ["a", "cb"], word2 = ["ab", "c"], Output: false


function arrayStringsEqual(word1, word2){
  let join1 = word1.join('');
  let join2 = word2.join('');

  if(join1.length !== join2.length){
    return false;
  }

  for(let i = 0; i < join1.length; i++){
    if(join1[i] !== join2[i]){
      return false;
    }
  }
  return true;
}

console.log(arrayStringsEqual(['ab', 'c'], ['a', 'bc']));
console.log(arrayStringsEqual(['a', 'cb'], ['ab', 'c']));