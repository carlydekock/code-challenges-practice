//238. Product of Array Except Self
//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//You must write an algorithm that runs in O(n) time and without using the division operation.
//Example: nums = [1,2,3,4], Output: [24,12,8,6]
//Example: nums = [-1,1,0,-3,3], Output: [0,0,9,0,0]

//Input: array nums
//Output: new array answer
//Create new array
//As iterate through nums, fill the answer array slots (all but corresponding slot to current num[i])
//Multiply the numbers in answer as you iterate through

function productExceptSelf(nums){
  let leftProduct = new Array(nums.length).fill(null);
  let rightProduct = new Array(nums.length).fill(null);
  let answer = new Array(nums.length).fill(null);

  leftProduct[0] = 1;
  rightProduct[nums.length-1] = 1;
  
  for(let i = 1; i < nums.length; i++){
    leftProduct[i] = (nums[i-1] * leftProduct[i-1]);
  }

  for(let j = nums.length - 2; j >= 0; j--){
    rightProduct[j] = (nums[j+1] * rightProduct[j+1]);
  }

  for(let k = 0; k < nums.length; k++){
    answer[k] = parseInt(leftProduct[k] * rightProduct[k]);
  }

  return answer;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
