//1346. Check if N and its Double Exist
//Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
//More formally check if there exists two indices i and j such that: i != j, 0 <= i, j < arr.length, arr[i] == 2 * arr[j]

//hash map: key of doubled value, value of index in array

function checkIfExist(arr){
  let nums = {};

  for(let i = 0; i < arr.length; i++){
    const currentNum = arr[i];
    const doubledNum = arr[i]*2;
    const halfNum = arr[i]/2;
    if(nums[doubledNum] || nums[halfNum]){
      return true;
    } else {
      nums[currentNum] = `index ${i}`;
    }
  }
  return false;
}

console.log(checkIfExist([10,2,5,3]));
console.log(checkIfExist([7,1,14,11]));
console.log(checkIfExist([3,1,7,11]));

//Summary: We need to be watching for both a doubled value, or if the current value is a doubled value of another (so 1/2 current value). Using hash map to log the indexes of the value, we can check for both the existence of the doubled value and half value of our current number in the hash map already. If so, return true. If not, add the current value. If we make it all the way through with no true, return false.
//Pattern: hash map, values as keys and indexes (or could be something else) as value
//Note: Beware of O === false in JavaScript. nums[doubledNum] was returning false because the index value at nums[doubledNum] = 0. Checking for existence, !!nums[doubledNum] = false, because the value itself there is 0. Putting to a string, still returns false. So, edited to have the word index in front with the index value.