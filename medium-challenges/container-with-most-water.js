//11. Container With Most Water
//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
//Note: you may not slant the container.
//Example - Input: height = [1,8,6,2,5,4,8,3,7], Output: 49

function maxArea(height){
  let max = 0;
  for(let i = 0; i < height.length; i++){
    for(let j = i+1; j < height.length; j++){
      let min = Math.min(height[i], height[j]);
      max = Math.max(max, min*(j-i));
    }
  }
  return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));