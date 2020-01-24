/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    while(nums.includes(val)){
        nums.splice(nums.indexOf(val), 1);
    }
    return nums.length;
};

console.log(removeElement([0,1,2,2,3,0,4,2],2));