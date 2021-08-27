//Rotate Array
//Given an array, rotate the array to the right by k steps, where k is non-negative.
//Example=> Input: nums = [1,2,3,4,5,6,7], k = 3
//Output: [5,6,7,1,2,3,4]
//Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
//Note: on Leetcode, does not return anything, supposed to modify nums in place
//Resource: https://www.youtube.com/watch?v=lTHTR_jsqAQ&ab_channel=FisherCoder

function rotate(nums, k){
  let length = nums.length;
  let newNums = Array(length).fill(0);
  // console.log(newNums);
  for(let i = 0; i < length; i++){
    let newLocation = (i + k) % length;
    newNums[newLocation] = nums[i];
  }
  //this is to "modify in place", if not needed, can return newNums array
  for(let j = 0; j < length; j++){
    nums[j] = newNums[j];
  }
  return nums;
}

console.log(rotate([1,2,3,4,5,6,7], 3));
