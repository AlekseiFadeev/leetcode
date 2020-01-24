var maxSubArray = function (nums) {
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum > 0 ? sum + nums[i] : nums[i];
        max = Math.max(sum, max);
    }
    return max;
};