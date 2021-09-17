//1047. Remove All Adjacent Duplicates In String
//You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
//We repeatedly make duplicate removals on s until we no longer can.
//Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
//Ex- Input: s = "abbaca", Output: "ca"
//Ex- Input: s = "azxxzy", Output: "ay"

function removeDuplicates(s){
  let stack = [s[0]];

  for(let i = 1; i < s.length; i++){
    let currentLetter = s[i];
    let last;
    if(stack.length > 0){
      last = stack[stack.length-1];
    }
    if(currentLetter === last){
      stack.pop();
    } else {
      stack.push(currentLetter);
    }
  }
  return stack.join('');
}

console.log(removeDuplicates('abbaca'));
console.log(removeDuplicates('azxxzy'));

//Summary: Using a stack, we can track what the last letter was and compare to the current letter. If the letters match, then we pop off the stack, if they don't then we add onto the stack. Keep iterating through the string until we reach the end, then join the contents of the stack and return. 
//Pattern: Using a stack to keep track of the last occurence of something and comparing it to the current element.