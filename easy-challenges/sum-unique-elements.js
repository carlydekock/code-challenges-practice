//Sum of Unique Elements
//You are given an array of nums. The unique elements of an array are the elements that appear exactly once in the array.
//Return the sum of all the unique elements of nums.
//Ex: nums = [1,2,3,2], output: 4 (sum of 1 and 3)
  //Create a object to serve as counter for times a number is in the array
  //If the count is 1 - sum the numbers
  //If the count is greater than 1, skip 

function sumOfUnique(nums){
  let count = {};
  let sumUnique = 0;

  for(let i = 0; i < nums.length; i++){
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }

  for(let key in count){
    if(count[key] === 1){
      sumUnique += parseInt(key);
    } 
  }
  return sumUnique;
}

// console.log(sumOfUnique([1,2,3,2]));
// console.log(sumOfUnique([1,1,1,1]));
// console.log(sumOfUnique([1,2,3,4,5]));