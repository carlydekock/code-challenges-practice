//Implement strStr().
//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

function strStr(haystack, needle){
  if(!needle){
    return 0;
  }
  if(haystack.length < needle.length){
    return -1;
  }

  let split = haystack.split('');
  let needleSplit = needle.split('');

  for(let i = 0; i < split.length; i++){
    
    if(split[i] === needleSplit[0]){
      //start loop to loop through needle characters
      let match = true;
      for(let j = 1; j < needleSplit.length; j++){
        if(split[i + j] !== needleSplit[j]){
          match = false;
        }
      }
      if(match){
        return i;
      }
    }
  }
  return -1;
}

// console.log(strStr('hello', 'llo'));