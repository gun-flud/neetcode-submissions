class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const newNums = [];

        for (const num of nums) {
            if (newNums.includes(num)) continue;

            newNums.push(num);
         }

        nums.length = 0;
        nums.push(newNums);
        return nums.length; 
    }
}
