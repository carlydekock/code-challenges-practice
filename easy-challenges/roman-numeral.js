//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//Given a roman numeral, convert it to an integer.

//convert roman numerals to numeric values - set in a hash
let values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

function romanToInt(s){
  let array = s.split('');

  let total = 0;
  let currentValue;
  let nextValue;

  for(let i = 0; i < array.length; i++){
    currentValue = values[array[i]];
    nextValue = values[array[i + 1]];

    if(currentValue < nextValue){
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
}

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('XXIV'));