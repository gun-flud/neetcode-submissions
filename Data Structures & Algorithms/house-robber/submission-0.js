class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length
        if (n === 1) {
            return nums[0];
        }
        nums[2] += nums[0];

        for (let i = 3; i < n; i++) {
            nums[i] += Math.max(nums[i-2], nums[i-3]);
        }
        return Math.max(nums[n-1], nums[n-2]);
    }
}
