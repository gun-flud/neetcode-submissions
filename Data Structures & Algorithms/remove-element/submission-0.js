class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
    let i = 0;

    for (i; i < nums.length; i++) { 
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
            console.log(nums);
        }  
    }
    return i;
    }
}
