//Majority Element
//Given an array of size n, return the majority element.
//Majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.
//Example: input: nums = [3,2,3], output: 3

function majorityElement(nums){
  let count = {};
  let majority = (nums.length - 1) / 2;

  for(let i = 0; i < nums.length; i++){
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }

  for(let key in count){
    if(count[key] > majority){
      return key;
    }
  }
}

console.log(majorityElement([2,2,1,1,1,2,2]));