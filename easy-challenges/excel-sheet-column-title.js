//Excel Sheet Column Title
//Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
//For example: A -> 1, B -> 2, C -> 3 ... Z -> 26, AA -> 27, AB -> 28
//Examples: input = 1, output = A
//input = 28, output = AB
//input = 701, output = ZY
//input = 2147483647, output = FXSHRXW

function convertToTitle(columnNumber){
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let num = columnNumber;
  let string = '';
  let result, numArray, decimal, newLetter;
  //For the case that its only a one letter column, numbers 1-26
  if(num <= 26){
    return letters[num-1];
  }

  while (num/26 > 1){
    result = num/26;
    if(result % 1 !== 0){
      numArray = result.toString().split('.');
      num = numArray[0];
      decimal = "." + numArray[1];
      newLetter = letters[(Math.round(decimal * 26)) - 1];
    } else {
      num = result;
      newLetter = 'Z';
    }
    string = newLetter + string;
  }
  string = letters[num-1] + string;
  
  return string;
}


console.log(convertToTitle(52));
