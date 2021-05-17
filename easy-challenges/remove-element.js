//Given an array nums and a value val, remove all instances of that value in-place and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//The order of elements can be changed. It doesn't matter what you leave beyond the new length.

function removeElement(nums, val){
  let i = 0;
  let j = nums.length;

  while (i < j){
    if(nums[i] === val){
      nums[i] = nums[j - 1];
      j--;
    } else {
      i++;
    }
  }
  return j;
}

// console.log(removeElement([1,2,3,3,4,5,3],3));
// console.log(removeElement([3,3],3));