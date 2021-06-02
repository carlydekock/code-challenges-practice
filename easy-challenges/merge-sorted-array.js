//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

function merge(nums1, m, nums2, n){

  let i = m - 1;
  let j = n - 1;
  let length = nums1.length - 1;

  while(j >= 0){
    if(nums1[i] > nums2[j]){
      nums1[length] = nums1[i];
      i--;
    } else {
      nums1[length] = nums2[j];
      j--;
    }
    length--;
  }
  return nums1;
}

// console.log(merge([1,2,5,0,0,0], 3, [2,3,4], 3));