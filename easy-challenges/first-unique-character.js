//First Unique Character in a String
//Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
//Ex: Input: s = "leetcode", Output: 0
//Ex: Input: s = "loveleetcode", Output: 2
//Ex: Input: s = "aabb", Output: -1

function firstUniqChar(string){
  let count = {};
  for(let i = 0; i < string.length; i++){
    count[string.charAt(i)] = (count[string.charAt(i)] || 0) + 1;
  }

  for(let key in count){
    if(count[key] === 1){
      return string.indexOf(key);
    }
  }
  return -1;
}

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));