//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
//Example - Input: nums = [3,0,1], Output: 2
//Note: Gauss' law of summation: sum of sequence (up to n) = n(n+1)/2

//Using set and built in methods
function missingNumber(nums){
  let check = new Set();
  for(let i = 0; i < nums.length; i++){
    check.add(nums[i]);
  }
  for(let i = 0; i <= nums.length; i++){
    let result = check.has(i);
    if(!result){
      return i;
    }
  }
  return -1;
}

console.log(missingNumber([0,1,3]));