//75. Sort Colors
//Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
//We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
//You must solve this problem without using the library's sort function.
//Example 1: Input: nums = [2,0,2,1,1,0], Output: [0,0,1,1,2,2]
//Example 2: Input: nums = [2,0,1], Output: [0,1,2]

//Selection Sort - sorting in place
const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

function sortColors(nums){
  for(let i = 0; i < nums.length; i++){
    let min = i;
    for(let j = i + 1; j < nums.length; j++){
      if(nums[j] < nums[min]){
        min = j;
      }
    }
    if(min !== i){
      swap(nums, min, i);
    }
  }
  return nums;
}

// console.log(sortColors([2,0,2,1,1,0]));


//Idea of counting sort
//Since we know there are only three options for numbers, can have a count of those on one pass through
function sortColorsTwo(nums){
  let count0 = 0; 
  let count1 = 0;
  let count2 = 0;

  for(let i = 0; i < nums.length; i++){
    const currentNum = nums[i];
    if(currentNum === 0){
      count0++;
    } else if(currentNum === 1){
      count1++;
    } else {
      count2++;
    }
  }
  
  let j = 0;
  while(count0 > 0){
    nums[j] = 0;
    j++;
    count0--;
  }
  while(count1 > 0){
    nums[j] = 1;
    j++;
    count1--;
  }
  while(count2 > 0){
    nums[j] = 2;
    j++;
    count2--;
  }
 
  return nums;
}

console.log(sortColorsTwo([2,0,2,1,1,0]));