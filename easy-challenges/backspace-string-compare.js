//844. Backspace String Compare
//Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
//Note that after backspacing an empty text, the text will continue empty.
//Ex- Input: s = "ab#c", t = "ad#c", Output: true
//Ex- Input: s = "ab##", t = "c#d#", Output: true
//Ex- Input: s = "a##c", t = "#a#c", Output: true
//Ex- Input: s = "a#c", t = "b", Output: false

function backspaceCompare(s, t) {
  let stackS = [];
  let stackT = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      stackS.pop();
    } else {
      stackS.push(s[i]);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (t[j] === '#') {
      stackT.pop();
    } else {
      stackT.push(t[j]);
    }
  }

  while (stackS.length > 0 && stackT.length > 0) {
    let letterS = stackS.pop();
    let letterT = stackT.pop();

    if (letterS !== letterT) {
      return false;
    }
  }

  if (stackS.length > 0 || stackT.length > 0) {
    return false;
  }

  return true;
}

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('a#c', 'b'));


//Summary: Using two stacks for each of the strings, if it's not a backspace character add it to the stack. If it is a backspace character, pop off the stack. We don't need to worry if the stack is empty, as it will just stay empty. Once we've iterated through the string, compare the two stacks by popping off one at a time, and comparing the letters. If any of them are not the same, return false. And, at the end, if either of the stacks are not empty, return false as well (one has more characters, therefore not the same string).
//Pattern: Using stack to track the last characters, and then iterating through to ensure what is in the two stacks is the same. Likely this is not the most efficient way, could use two pointers, go through the string backwards so that we know which letters to skip, and just run through once to ensure if the letter shouldn't be skipped that the two are equal.
