//Reverse Vowels of a String
//Given a string s, reverse only all the vowels in the string and return it.
//The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

function reverseVowels(s){
  if(s.length === 0){
    return s;
  }
  let vowels = 'aeiouAEIOU';
  let characters = s.split('');
  let left = 0;
  let right = s.length - 1;
  let temp;
  
  while(left < right){
    while(left < right && vowels.indexOf(characters[left]) === -1){
      left++;
    }
    while(left < right && vowels.indexOf(characters[right]) === -1){
      right--;
    }

    temp = characters[right];
    characters[right] = characters[left];
    characters[left] = temp;
    left++;
    right--;
  }
  return characters.join('');
}

// console.log(reverseVowels('hello'));