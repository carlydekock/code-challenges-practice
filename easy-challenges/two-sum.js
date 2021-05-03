//create object (hashtable) for containing key-value pairs of the element and index
// iterate through the array
// for the currentElement, compute the currentDiffference (difference of target - currentElement)
// if the currentDifference exists in the hashTable, return the index of the currentElement and currentDifference  

function twoSum(nums, target){
  numsIndexes = {};

  for(let i = 0; i < nums.length; i++){
    let currentDifference = target - nums[i];
    // console.log('nums[i]', nums[i]);
    // console.log('difference', currentDifference);
    // console.log('indexes', numsIndexes);
    if(numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i){
      return [i, numsIndexes[currentDifference]];
    } else{
      numsIndexes[nums[i]] = i;
    }
  }
}

console.log(twoSum([1,2,3,4,5], 9));