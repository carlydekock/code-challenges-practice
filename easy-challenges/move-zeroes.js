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
  for(let i = index; i < nums.length; i++){
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));

//Summary: The first solution that came to mind (eventually) was that as we iterate through the array, when we get to a number that is not a zero, that number will move to the index - numZeroes so far. However many zeroes we've come across so far at that point, the number will need to "shift" back that many indexes in the final array. At the end, we have a count of numZeroes, we can "fill" the array iterating backwards from the end until we've filled in the correct amount of zeroes. Another solution that is more straighforward, is to iterate through the array forwards with a index pointer initialized to zero, if we arrive at a number that isn't a 0, set nums[index] = nums[i] and increment the index. Once we've made it through the for loop, wherever we are at for index, start there and go to the end and fill with zeroes.
//Pattern: Two pointers, or two for loops with pointer.