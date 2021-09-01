//49. Group Anagrams
//Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//Ex - Input: strs = ["eat","tea","tan","ate","nat","bat"], Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs){
  if(strs.length <= 1){
    return [strs];
  }

  let words = {};

  for(let str of strs){
    let sortedKey = str.split('').sort().join('');
    if(!words[sortedKey]){
      words[sortedKey] = [str];
    } else {
      words[sortedKey].push(str);
    }
  }

  return Object.values(words);

}

console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));