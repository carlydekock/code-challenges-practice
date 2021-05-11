//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.

function isValid(s){
  let stack = [];
  let brackets = {
    '{': '}',
    '(': ')',
    '[': ']',
  }

  for(let i = 0; i < s.length; i++){
    if(s[i] === '{' || s[i] === '(' || s[i] === '['){
      stack.push(s[i]);
    } else {
      let last = stack.pop();

      if(s[i] !== brackets[last]){
        return false;
      }
    }
  }
  if (stack.length !== 0){
    return false;
  }
  return true;
}