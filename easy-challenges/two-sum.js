//Two Sum

//create object (hashtable) for containing key-value pairs of the element and index
// iterate through the array
// for the currentElement, compute the currentDiffference (difference of target - currentElement)
// if the currentDifference exists in the hashTable, return the index of the currentElement and currentDifference  

//LeetCode - Problem 1
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

// function twoSum(nums, target){
//   let numsIndex = {};
//   let result = [];

//   for(let i = 0; i < nums.length; i++){
//     let currentNum = nums[i];
//     let currentDifference = target - currentNum;

//     if(numsIndex[currentDifference] !== undefined && numsIndex[currentDifference] !== i){
//       result[0] = numsIndex[currentDifference];
//       result[1] = i;
//     }
//     numsIndex[currentNum] = i;
//     // console.log(numsIndex);
//   }
//   return result;
// }

function twoSum(nums, target){
  let numsIndex = new Map();
  let result = [];

  for(let i = 0; i < nums.length; i++){
    let currentNum = nums[i];
    let currentDifference = target - currentNum;

    if(numsIndex.has(currentDifference)){
      result[0] = numsIndex.get(currentDifference);
      result[1] = i;
      return result;
    }
    numsIndex.set(currentNum, i);
  }
}


console.log(twoSum([2,7,11,15], 9));
