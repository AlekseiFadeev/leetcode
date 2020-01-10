// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
      for(let y = nums.length; y > 0; y--){
        if(nums[i] + nums[y] == target && i != y){
          return [i, y];
        }
      }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));