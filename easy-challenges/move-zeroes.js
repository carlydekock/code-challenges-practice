//283. Move Zeroes
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note: You must do this in-place without making a copy of the array.
//Example 1: Input: nums = [0,1,0,3,12], Output: [1,3,12,0,0]
//Example 2: Input: nums = [0], Output: [0]

function moveZeroes(nums){
  let index = 0;
  let numZeroes = 0;
  let last = nums.length -1;

  while(index < nums.length){
    if(nums[index] === 0){
      numZeroes++;
      index++;
    } else {
      nums[index - numZeroes] = nums[index];
      index++;
    }
  }

  while(numZeroes > 0){
    nums[last] = 0;
    last--;
    numZeroes--;
  }

  return nums;
}

function moveZeroesTwo(nums){
  let index = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
      nums[index] = nums[i];
      index++;
    }
  }
  console.log('in middle', nums);
  for(let i = index; i < nums.length; i++){
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));

