/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    if(nums[nums.length-1] < target) return nums.length;

    for(let i = 0; nums.length; i++)
    {
        if(target <= nums[i]){
            return i;
        }
    }
};

console.log(searchInsert([1,3,5,6], 7));