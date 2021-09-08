//238. Product of Array Except Self
//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//You must write an algorithm that runs in O(n) time and without using the division operation.
//Example: nums = [1,2,3,4], Output: [24,12,8,6]
//Example: nums = [-1,1,0,-3,3], Output: [0,0,9,0,0]

//Input: array nums
//Output: new array answer
//Create new array
//As iterate through nums, fill the answer array slots (all but corresponding slot to current num[i])
//Multiply the numbers in answer as you iterate through

function productExceptSelf(nums){
  let leftProduct = new Array(nums.length).fill(null);
  let rightProduct = new Array(nums.length).fill(null);
  let answer = new Array(nums.length).fill(null);

  leftProduct[0] = 1;
  rightProduct[nums.length-1] = 1;
  
  for(let i = 1; i < nums.length; i++){
    leftProduct[i] = (nums[i-1] * leftProduct[i-1]);
  }

  for(let j = nums.length - 2; j >= 0; j--){
    rightProduct[j] = (nums[j+1] * rightProduct[j+1]);
  }

  for(let k = 0; k < nums.length; k++){
    answer[k] = parseInt(leftProduct[k] * rightProduct[k]); //using parseInt() to avoid -0s 
  }

  return answer;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));

//Summary: Return an answer array of the products of all numbers such that answer[i] is the product of all numbers except nums[i]. Must write an algorithm that runs in O(n) time and without using the division operation, thus can only pass through the array one time. We'll create two additional array to store products, one from the left side of each nums[i], and one from the right side of each nums[i]. Then, we can multiple the numbers at each index of these two arrays to get to our final product for our answer array. Thinking of each product as all the numbers to the right and to the left, but if we can only pass once, we need to store both of these as we go through the array. Little tricky with Javascript in the end as we can output +/- O. Used parseInt() to take care of what was outputting as -0.
//Pattern: Need products from left and right, and we know can only do it in O(n) time, so need store up to that point from left and up to that point from right at every index. Then, multiply the values together for the final answer array. Using two loops, going from one side of the array and the other going from the opposite side of the array.
