//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
//Strings consist of only lower case English letters

function longestCommonPrefix(strs){
  let prefix = "";
  if(strs.length === 0 || !strs) {
    return prefix;
  }

  for(let i = 0; i < strs[0].length; i++){
    const character = strs[0][i];

    for(let j = 1; j < strs.length; j++){
      if(strs[j][i] !== character){
        return prefix;
      }
    }
    prefix = prefix + character;
  }
  return prefix;
}

// console.log(longestCommonPrefix(['test', 'testtest', 'testtesttest']));