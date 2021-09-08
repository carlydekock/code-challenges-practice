//11. Container With Most Water
//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
//Note: you may not slant the container.
//Example - Input: height = [1,8,6,2,5,4,8,3,7], Output: 49

function maxArea(height){
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  let min = 0;

  while(left < right){
    min = Math.min(height[left], height[right]);
    max = Math.max(max, min*(right-left));
    if(height[left] < height[right]){
      left++;
    } else {
      right--;
    }
  }
  return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

//Summary: With two pointers at each end and sliding window, we'll keep tabs on the minimum value (limit to our container) and the maxArea thus far (min * length of container). Whichever value is the lowest, which will be the limiting factor to our calculation of maximum value, we'll move past to the next value (either left+ or right--). Tracking the ongoing max value through the array, and reassigning if we come across a combination that is greater than the previous max.
//Pattern: Two pointers at each end with sliding window in between. Recognizing that the lower value is the limiting factor, so moving left and right according to which is lower. Be sure to have if/else, so that we make sure we are moving no matter what. Ongoing calculation of max, keeping the highest value whether currentMax or previous ongoing value of max.