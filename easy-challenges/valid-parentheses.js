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
  };

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


//Summary: Set up a brackets object with key/value pairs of the corresponding opening and closing brackets. Iterate through the string, if it is an opening bracket, push it onto the stack. We're using a stack, because the last in needs to be the first out as well, the last open bracket needs to match up with the next closed bracket. If it's not an opening bracket, then pop off the stack and ensure that the string popped off matches the value in the brackets object for that key. If it doesn't match, return false. Also, if at the end of our loop, if the stack is not empty, then return false (there are mismatched brackets). Otherwise, return true.
//Pattern: Map/object to store corresponding brackets. Iterate through to match up opening and closing brackets. Key is to use a stack - last to be added needs to match up first.
