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
    let sortedKey = str.split('').sort().join(''); //splitting the characters up and sorting, if there are the same characters they will always sort the same way
    if(!words[sortedKey]){
      words[sortedKey] = [str]; //if nothing in the object at that key, add this current str
    } else {
      words[sortedKey].push(str); //if there already is something, then we've found anagrams, add this str as well 
    }
  }

  return Object.values(words); //to return all the values at each key

}

console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));

//Summary: Since we have an array of strings, we need to figure out how to check each one against the others. A bit of a brute force approach, but sorting each of the strings will produce the same sortedKey as another string if they are anagrams. We can keep track of these in an object at that sortedKey. As we iterate through the array, if there are group anagrams, the sortedKey will exist in the object and we can push the current string into the array of strings already there as all the strings in that array are anagrams. To return in the correct format, we want to return an array of arrays of the group anagrams, or all the values at each sortedKey in the object.
//Pattern: Map or object to keep track of sortedKey and an array of strings with that sortedKey. Feels like a bit of brute force using the built in sort function, but also intuitive when having multiple words to compare to (instead of comparing one word to another to see if they are anagrams) as all anagrams will sort the same. 