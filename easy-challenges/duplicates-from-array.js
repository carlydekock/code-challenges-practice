//Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

function removeDuplicates(nums){
  let i = 0;
  let j = 1;

  while(j < nums.length){
    if(nums[i] !== nums[j]){
      i++;
      nums[i] = nums[j];
      j++;      
    } else {
      j++;
    }
  }
  return i + 1;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
