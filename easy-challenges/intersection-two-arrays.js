//Intersection of Two Arrays

//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
//Example- Input: nums1 = [1,2,2,1], nums2 = [2,2], Output: [2]
//Example- Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4], Output: [9, 4]

function intersection(nums1, nums2){
  let results = [];
  let numSet1 = new Set();
  let numSet2 = new Set();

  for(let i = 0; i < nums1.length; i++){
    if(!numSet1.has(nums1[i])){
      numSet1.add(nums1[i]);
    }
  }
  for(let j = 0; j < nums2.length; j++){
    if(!numSet2.has(nums2[j])){
      numSet2.add(nums2[j]);
    }
  }
  for(let value of numSet1){
    if(numSet2.has(value)){
      results.push(value);
    }
  }
  return results;
}

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));