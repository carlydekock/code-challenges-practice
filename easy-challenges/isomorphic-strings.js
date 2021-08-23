//Given two strings s and t, determine if they are isomorphic.
//Two strings s and t are isomorphic if the characters in s can be replaced to get t.
//All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
//Example - Input:  s = "egg", t = "add", Output: true
//Example - Input:  s = "foo", t = "bar", Output: false

function isIsomorphic(s, t){
  if(s.length !== t.length){
    return false;
  }

  let sToT = {};
  let tToS = {};

  for(let i = 0; i < s.length; i++){
    let sChar = s[i];
    let tChar = t[i];
    console.log(sChar, tChar);

    if(sToT[sChar] === undefined){
      sToT[sChar] = tChar;
    }

    if(tToS[tChar] === undefined){
      tToS[tChar] = sChar;
    }

    if(sToT[sChar] !== tChar || tToS[tChar] !== sChar){
      return false;
    }
  }

  return true;
  // console.log(sToT, tToS);
}

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));