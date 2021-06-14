//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space.
//Input: nums = [2,2,1]
//Output: 1

function singleNumber(nums){
  let count = {};
  for(let i = 0; i < nums.length; i++){
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }
  for(let key in count){
    if(count[key] !== 2){
      return key;
    }
  }
}

console.log(singleNumber([4,2,1,1,2]));