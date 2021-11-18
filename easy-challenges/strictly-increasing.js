//1909. 
//Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.
//The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

//check if sorted
//if yes -> return true
//if no -> iterate through the array, remove index i, and check if sorted

function isSorted(arr){
  for(let i = 1; i < arr.length; i++){
    if(arr[i] <= arr[i-1]){
      return false;
    }
  }
  return true;
}

function canBeIncreasing(nums){
  const sorted = isSorted(nums);
  if(sorted){
    return true;
  } else {
    for(let i = 0; i < nums.length; i++){
      const editedArray = [...nums];
      editedArray.splice(i, 1);
      const check = isSorted(editedArray);
      if(check) return true;
    }
  }
  return false;
}

console.log(canBeIncreasing([1,2,10,5,7]));
console.log(canBeIncreasing([2,3,1,2]));
console.log(canBeIncreasing([1,1,1]));
console.log(canBeIncreasing([1,2,3]));

//Summary: We need to check if the array is sorted. If it is return true, if it isn't, then we need to check if the array can be sorted by removing each index as we iterate through. Can it be sorted with index 0 gone, if not leave index 0 and remove index 1, etc. Using an isSorted helper function, we can iterate through, calling our helper function each time to check if the array is sorted.
